import { parseNonPOJO, parseCard } from '$lib/helpers.js';

export const load = async ({ locals }) => {

    if(locals.pb?.authStore?.isValid) {

        

    }

    else {

        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        const allCards = await parseNonPOJO(_allCards);
        const randomCard = allCards[Math.floor(Math.random() * (allCards.length - 1))]

        const card = await parseCard(locals, randomCard);

        return {
            cardData: card,
        }

    }

}