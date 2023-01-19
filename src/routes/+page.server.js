import { parseNonPOJO, parseCard } from '$lib/helpers.js';

// This function is called at page load
export const load = async ({ locals }) => {

    // If the user is logged in
    if(locals.pb?.authStore?.isValid) {

        let allUserCards = []

        //gets all cards
        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        //parses all cards to POJO
        const allCards = await parseNonPOJO(_allCards);

        //checks if the user owns the card
        allCards.forEach(async (card) => {
            if(locals.user.ownedCards.includes(card.id)) {
                allUserCards.push(card)
            }
        })

        //if the user doesn't own any cards, return false
        if(allUserCards.length == 0) {
            return {
                cardData: false
            }
        }

        //gets a random card from the filtered cards
        const randomCard = allUserCards[Math.floor(Math.random() * (allUserCards.length))]

        //adds data from related collections to the cards
        const card = await parseCard(locals, randomCard);

        //returns the card data
        return {
            cardData: card,
        }

    }

    // If the user not is logged in
    else {

        //gets all cards
        const _allCards = await locals.pb.collection('cards').getFullList(200, {
            sort: '-created'
        })

        //parses all cards to POJO
        const allCards = await parseNonPOJO(_allCards);
        //gets a random card from the filtered cards
        const randomCard = allCards[Math.floor(Math.random() * (allCards.length))]

        //adds data from related collections to the cards
        const card = await parseCard(locals, randomCard);

        //returns the card data
        return {
            cardData: card,
        }

    }

}