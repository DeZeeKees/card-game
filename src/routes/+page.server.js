import { parseNonPOJO } from '$lib/helpers.js';

export const load = async ({ locals }) => {

    if(locals.pb?.authStore?.isValid) {

        

    }

    else {

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

        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        const allCards = await parseNonPOJO(_allCards);
        const randomCard = allCards[Math.floor(Math.random() * (allCards.length - 1))]

        card.id = randomCard.collectionId;
        card.name = randomCard.name;
        card.description = randomCard.description;
        card.image = randomCard.image;
        
        const typeArray = await randomCard.type.map( async (typeId, index) => {
            let type = await locals.pb.collection('card_types').getFirstListItem('id="' + typeId + '"');
            return type.type;
        })
        card.types = await Promise.all(typeArray);

        const rarity = await locals.pb.collection('card_rarities').getFirstListItem('id="' + randomCard.rarity + '"');
        card.rarity = rarity.name

        card.cost = randomCard.cost;
        card.attack = randomCard.attack;
        card.health = randomCard.health;

        return {
            cardData: card,
        }

    }

}