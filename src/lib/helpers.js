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

    //sets the id, name, description and image of the card
    card.id = inputCard.id;
    card.name = inputCard.name;
    card.description = inputCard.description;
    card.image = inputCard.image;
    
    //gets the types of the card
    const typeArray = await inputCard.type.map( async (typeId, index) => {
        let type = await locals.pb.collection('card_types').getFirstListItem('id="' + typeId + '"');
        return type.type;
    })
    //sets the types of the card
    card.types = await Promise.all(typeArray);

    //gets the rarity of the card
    const rarity = await locals.pb.collection('card_rarities').getFirstListItem('id="' + inputCard.rarity + '"');
    //sets the rarity of the card
    card.rarity = rarity.name
    card.rarityValue = rarity.rarity_value

    //sets the cost attack and health of the card
    card.cost = inputCard.cost;
    card.attack = inputCard.attack;
    card.health = inputCard.health;

    //gets the color of the card
    const color = getCardColor(card.rarity);

    //sets the color of the card
    card.color.border = color.cardBorderColor;
    card.color.background = color.cardBackgroundColor;
    card.color.text = color.cardTextColor;

    //return the card
    return card;

}

//gets the color of the card based on the rarity
export const getCardColor = (rarity) => {
    switch(rarity) {
        case 'common':
            return {
                cardBorderColor: '#DAA520',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'uncommon':
            return {
                cardBorderColor: '#1E90FF',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'rare':
            return {
                cardBorderColor: '#00FF00',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'epic':
            return {
                cardBorderColor: '#800080',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'legendary':
            return {
                cardBorderColor: '#FFD700',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'mythical':
            return {
                cardBorderColor: '#FF1493',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'lesser god': 
            return {
                cardBorderColor: '#FFC0CB',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'god':
            return {
                cardBorderColor: '#FF69B4',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
            }
        case 'greater god':
            return {
                cardBorderColor: '#FF4500',
                cardBackgroundColor: '#fff',
                cardTextColor: 'textBlack'
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