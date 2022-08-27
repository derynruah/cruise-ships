class Ship {
    constructor (startPort) {
        this.startPort = startPort;
    }
    setSail() {
        this.startPort = null;
    }
}

module.exports = Ship;