export const parseNonPOJO = async (obj) => {
    return await JSON.parse(JSON.stringify(obj));
}

export const parseCard = async (locals = false, inputCard = false) => {

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

    if(card == false || locals == false) return false;

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

    return card;

}