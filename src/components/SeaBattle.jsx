import React from 'react';
import Field from './Field';
import SeaBattleLog from './SeaBattleLog';
import shipDerection from '../extensions/shipDerection';
import setShips from '../extensions/setShips';

class SeaBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      ships: [...setShips],
      gameOver: false,
      logs: ['Ожидание хода...'],
      hitsCount: 0,
      shotCount: 0,
      missCount: 0
    };
    // первоначальное (пустое) состояние поля
    for (let i = 0; i < 10; i++) {
      this.state.fields.push([]);
    }

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.state.fields[i].push({
          x: j,
          y: i,
          containsShip: false,
          shot: false,
          isShipVisible: false,
          shipId: null,
        });
      }
    }

    // расставляем стандартный набор кораблей
    this.state.ships.forEach(ship => {
      shipDerection(this.state.fields, ship)
    });

  }

  handleClick(y, x) {
    if (this.state.fields[y][x].shot) {
      return
    }

    if (this.state.gameOver) {
      return
    }
    this.setState(state => {
      const newField = [...state.fields];
      newField[y][x].shot = true;
      newField[y][x].isShipVisible = true;

      const newShips = [...state.ships];
      const newLogs = [...state.logs];

      let gameOver = false;
      let hitsCount = state.hitsCount
      let shotCount = state.shotCount
      let missCount = state.missCount

      //проверка: потоплен корабль или нет
      if (newField[y][x].containsShip) {
        let hittedShip = newShips.find(ship => (ship.id === newField[y][x].shipId));
        hittedShip.hitpoints--;

        // если хитпоинтов больше нуля, то это обычное попадание
        // если хитпоинтов ноль, то корабль уничтожен
        if (hittedShip.hitpoints > 0) {
          newLogs.push('Попадание!');
          hitsCount += 1
          shotCount += 1

        } else {
          newLogs.push('Корабль уничтожен!');
          hitsCount += 1
          shotCount += 1
        }
        if (newShips.every(ship => (ship.hitpoints === 0))) {
          newLogs.push('Игра окончена');
          newLogs.push(`Всего выстрелов : ${shotCount} промахов : ${missCount} , попаданий : ${hitsCount} `);
          gameOver = true;
        }
      } else {
        missCount += 1
        shotCount += 1
      }

      return {
        fields: newField,
        ships: newShips,
        gameOver: gameOver,
        hitsCount: hitsCount,
        shotCount: shotCount,
        missCount: missCount,
        logs: newLogs,
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Field
          fieldMap={this.state.fields}
          onClick={(y, x) => this.handleClick(y, x)}
        />
        <SeaBattleLog logs={this.state.logs} />
      </div>
    );
  }
}

export default SeaBattle;
