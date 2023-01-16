

class Card {

    constructor(card) {
        this.id = card.id;
        this.name = card.name;
        this.description = card.description;
        this.image = card.image;
        this.types = card.types;
        this.rarity = card.rarity;
        this.cost = card.cost;
        this.attack = card.attack;
        this.health = card.health;
        this.abilities = null
    }

}

export default Card;