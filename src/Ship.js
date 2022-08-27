class Ship {
    constructor (itinerary) {
        this.itinerary = itinerary
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort
        this.currentPort = null;
    }
    dock() {
        const itinerary = this.itinerary
        const perviousPortIndex = itinerary.ports.indexOf(this.previosuPort);

        this.currentPort = itinerary.ports[perviousPortIndex + 1];
    }
}

module.exports = Ship;