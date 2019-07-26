//задача 1

class Weapon {
  constructor({name, attack, durability, range}) {
    this.name = name;
    this.attack = attack;
    this.startDurability = durability;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    
    if (damage > this.durability) {
      this.durability = 0;
    } else {
      this.durability = this.durability - damage;
    }    
  }



  getDamage() {
    if (this.durability >= this.startDurability * 0.3) {
      return this.attack;
    } else if (this.durability === 0) {
      return 0;
    } else {
      return this.attack / 2;
    }
  }

  isBroken() {
    return this.durability === 0;
  }
}

const hand = new Weapon({
  name: 'Рука',
  attack: 1,
  startDurability: Infinity,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  startDurability: 200,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  startDurability: 500,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  startDurability: 300,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  startDurability: 300,
  durability: 300,
  range: 2,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  basedWeapon: 'Лук',
  attack: 15,
  startDurability: 200,
  durability: 200,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  basedWeapon: 'Меч',
  attack: 27,
  startDurability: 800,
  durability: 800,
  range: 1,
});

const storm = new Weapon({
  name: 'Посох бури',
  basedWeapon: 'Посох',
  attack: 10,
  startDurability: 300,
  durability: 300,
  range: 3,
});

//задача 2

class Hand extends Weapon {
  constructor() {
    super({name: 'Рука', attack: 1, startDurability: Infinity, durability: Infinity, range: 1});
  }
}

const hand2 = new Hand()

class Bow extends Weapon {
  constructor() {
    super({name: 'Лук', attack: 10, startDurability: 200, durability: 200, range: 3});
  }
}

const bow2 = new Bow();

class Sword extends Weapon {
  constructor() {
    super({name: 'Меч', attack: 25, startDurability: 500, durability: 500, range: 1});
  }
}

const sword2 = new Sword();

class Knife extends Weapon {
  constructor() {
    super({name: 'Нож', attack: 5, startDurability: 300, durability: 300, range: 1});
  }
}

const knife2 = new Knife();

class Staff extends Weapon {
  constructor() {
    super({name: 'Посох', attack: 8, startDurability: 300, durability: 300, range: 2});
  }
}

const staff2 = new Staff();

class LongBow extends Bow {
  constructor(basedWeapon) {
    super();
    this.name = 'Длинный лук';
    this.basedWeapon = 'Лук';
    this.attack = 15;
    this.range = 4;
  }
}

const longBow2 = new LongBow();

class Axe extends Sword{
  constructor(basedWeapon) {
    super();
    this.name = 'Секира';
    this.basedWeapon = 'Меч',
    this.attack = 27;
    this.startDurability = 800;
    this.durability = 800;
  }
}

const axe2 = new Axe();

class Storm extends Staff{
  constructor(basedWeapon) {
    super();
    this.name = 'Посох бури';
    this.basedWeapon = 'Посох',
    this.attack = 10;
    this.range = 3;
  }
}

const storm2 = new Storm();



console.log(longBow2.name); // Лук
console.log(longBow2.attack); // 10
console.log(longBow2.durability); // 200
console.log(longBow2.range); // 3
