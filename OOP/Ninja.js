class Ninja{
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`Ninja Stats: ${this.name} \nHeath: ${this.health} \nSpeed: ${this.speed} \nStrength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Health increase +10: \nHealth Level: ${this.health}`)
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
console.log(ninja1);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();


class Sensei extends Ninja{
    constructor(name, wisdom=10) {
        super(name, Ninja.health=200, Ninja.speed=10, Ninja.strength=10);
        this.name = name;
        this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
console.log(superSensei);
superSensei.speakWisdom();
superSensei.showStats();
superSensei.speakWisdom();