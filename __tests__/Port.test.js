const Port = require('../src/Port.js');

describe('Port', () => {
    let port;

    beforeEach(() => {
        port = new Port('Dover');
    });

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name', () => {
        expect(port.name).toBeTruthy();
    });

    it('can add a ship', () => {
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });

    it('can remove a ship', () => {
        const titanic = {};
        const queenMary = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);
    });
});