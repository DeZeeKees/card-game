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
        color: {
            border: null,
            background: null,
            text: null
        }
    }

    //check if we have the required data
    if(card == false || locals == false) return false;

    //parse the card data
    card.id = inputCard.id;
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
    card.rarityValue = rarity.rarity_value

    card.cost = inputCard.cost;
    card.attack = inputCard.attack;
    card.health = inputCard.health;

    const color = getCardColor(card.rarity);

    card.color.border = color.cardBorderColor;
    card.color.background = color.cardBackgroundColor;
    card.color.text = color.cardTextColor;

    //return the card
    return card;

}

export const getCardColor = (rarity) => {
    switch(rarity) {
        case 'common':
            return {
                cardBorderColor: '#DAA520',
                cardBackgroundColor: '#F89880',
                cardTextColor: 'text'
            }
        case 'uncommon':
            return {
                cardBorderColor: '#1E90FF'
            }
        case 'rare':
            return {
                cardBorderColor: '#00FF00'
            }
        case 'epic':
            return {
                cardBorderColor: '#800080'
            }
        case 'legendary':
            return {
                cardBorderColor: '#FFD700'
            }
        case 'mythical':
            return {
                cardBorderColor: '#FF1493'
            }
        case 'lesser god': 
            return {
                cardBorderColor: '#FFC0CB'
            }
        case 'god':
            return {
                cardBorderColor: '#FF69B4'
            }
        case 'greater god':
            return {
                cardBorderColor: '#FF4500'
            }
        case 'the one above all':
            return {
                cardBorderColor: '#3B7ED8',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
    }
}

export const getRandomNumberWithPercentages = (percentages,range) => {
    // Create an array of ranges based on the percentages
    const ranges = [];
    let start = 0;
    for (let i = 0; i < percentages.length; i++) {
      ranges.push([start, start + percentages[i]]);
      start += percentages[i];
    }
    
    // Generate a random number between 0 and 100
    const randomNumber = Math.random() * 100;
    
    // Determine which range the random number falls into
    for (let i = 0; i < ranges.length; i++) {
      if (randomNumber >= ranges[i][0] && randomNumber < ranges[i][1]) {
        return (i+1)*range/percentages.length;
      }
    }
}