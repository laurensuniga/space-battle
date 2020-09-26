class Ships {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

const ussAssembly = new Ships(20, 5, .7);

const alienShips = [
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
    new Ships(Math.floor(Math.random() * (7 - 3) + 3), Math.floor(Math.random() * (5 - 2) + 2), Math.random() * (.801 - .6) + .6),
];


