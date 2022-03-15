// небольшая функция-сниппет, которая добавляет корабль на поле
// сдвиг на единицу появился из-за отсчета индекса массива с нуля

export default (field, ship) => {
    switch (ship.direction) {
        case 'right':
            for (let i = ship.startSquare.x - 1; i < ship.startSquare.x - 1 + ship.size; i++) {
                field[ship.startSquare.y - 1][i].containsShip = true;
                field[ship.startSquare.y - 1][i].shipId = ship.id;
            }
            break;
        case 'down':
            for (let i = ship.startSquare.y - 1; i < ship.startSquare.y - 1 + ship.size; i++) {
                field[i][ship.startSquare.x - 1].containsShip = true;
                field[i][ship.startSquare.x - 1].shipId = ship.id;

            }
            break;
        default:
    }
}