import { redirect } from "@sveltejs/kit";
import { parseNonPOJO, parseCard } from '$lib/helpers.js'

export const load = async ({ locals }) => {

    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }

    let allUserCards = []

    const _allCards = await locals.pb.collection('cards').getFullList(200, {
        sort: '-created'
    })

    const allCards = await parseNonPOJO(_allCards);

    const parseForeach = await allCards.map(async (card, index) => {
        if(locals.user.ownedCards.includes(card.id)) {
            let parsedCard = await parseCard(locals, card)
            allUserCards.push(parsedCard)
        }
    })

    await Promise.all(parseForeach)

    if(allUserCards.length == 0) {
        return {
            cardData: false
        }
    }

    return {
        cardData: allUserCards,
    }


}