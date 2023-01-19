import { redirect } from "@sveltejs/kit";
import { parseNonPOJO, parseCard } from '$lib/helpers.js'

// This function is called at page load
export const load = async ({ locals }) => {

    // If the user is not logged in redirect to home
    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }

    let allUserCards = []

    //gets all the cards
    const _allCards = await locals.pb.collection('cards').getFullList(200, {
        sort: '-created'
    })

    //parses the cards into a POJO
    const allCards = await parseNonPOJO(_allCards);

    const parseForeach = await allCards.map(async (card, index) => {
        //checks if the user owns the card
        if(locals.user.ownedCards.includes(card.id)) {
            //adds data from related collections to the cards
            let parsedCard = await parseCard(locals, card)
            allUserCards.push(parsedCard)
        }
    })

    await Promise.all(parseForeach)

    //if the user doesn't own any cards, return false
    if(allUserCards.length == 0) {
        return {
            cardData: false
        }
    }

    allUserCards.sort((a, b) => {
        return b.rarityValue - a.rarityValue
    })

    //returns the card data
    return {
        cardData: allUserCards,
    }


}