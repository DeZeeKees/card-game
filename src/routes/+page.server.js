import { parseNonPOJO, parseCard } from '$lib/helpers.js';

export const load = async ({ locals }) => {

    if(locals.pb?.authStore?.isValid) {

        let allUserCards = []

        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        const allCards = await parseNonPOJO(_allCards);

        allCards.forEach(async (card) => {
            if(locals.user.ownedCards.includes(card.id)) {
                allUserCards.push(card)
            }
        })

        if(allUserCards.length == 0) {
            return {
                cardData: false
            }
        }

        const randomCard = allUserCards[Math.floor(Math.random() * (allUserCards.length))]

        const card = await parseCard(locals, randomCard);

        return {
            cardData: card,
        }

    }

    else {

        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        const allCards = await parseNonPOJO(_allCards);
        const randomCard = allCards[Math.floor(Math.random() * (allCards.length))]

        const card = await parseCard(locals, randomCard);

        return {
            cardData: card,
        }

    }

}