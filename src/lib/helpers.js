export const parseNonPOJO = async (obj) => {
    //parse a non-POJO object into a POJO object
    return await JSON.parse(JSON.stringify(obj));
}

export const parseCard = async (locals = false, inputCard = false) => {


//initialize card object
    let card = {
        id: null,
        name: null,
        description: null,
        image: null,
        types: null,
        rarity: null,
        cost: null,
        attack: null,
        health: null,
    }

    //check if we have the required data
    if(card == false || locals == false) return false;

    //parse the card data
    card.id = inputCard.collectionId;
    card.name = inputCard.name;
    card.description = inputCard.description;
    card.image = inputCard.image;
    
    const typeArray = await inputCard.type.map( async (typeId, index) => {
        let type = await locals.pb.collection('card_types').getFirstListItem('id="' + typeId + '"');
        return type.type;
    })
    card.types = await Promise.all(typeArray);

    const rarity = await locals.pb.collection('card_rarities').getFirstListItem('id="' + inputCard.rarity + '"');
    card.rarity = rarity.name

    card.cost = inputCard.cost;
    card.attack = inputCard.attack;
    card.health = inputCard.health;

    //return the card
    return card;

}