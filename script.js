class Ships {
    constructor(hull, firepower, accuracy, name) {
        this.hull = hull || Math.floor(Math.random() * (7 - 3) + 3);
        this.firepower = firepower || Math.floor(Math.random() * (5 - 2) + 2);
        this.accuracy = accuracy || Math.random() * (.801 - .6) + .6;
        this.name = name || '';
    }
};


const game = {
    title: "Space Battle",
    aliens: new Array(6).fill().map(alien => new Ships()),
    heroShip = new Ships(20, 5, .7, 'USS Assembly'),
    meetOurHero : function (){
      console.log(heroShip)
    }

}


