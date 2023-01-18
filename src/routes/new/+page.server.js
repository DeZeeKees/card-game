import { redirect } from "@sveltejs/kit";
import { parseNonPOJO, parseCard, getRandomNumberWithPercentages } from '$lib/helpers.js'

export const load = async ({ locals }) => {

    let allParsedCards = [];

    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }

    const percentages = [55, 23.39, 10, 5, 3, 2, 1, 0.5, 0.1, 0.01];
    const randomNumber = getRandomNumberWithPercentages(percentages,10);

    const _allCards = await locals.pb.collection('cards').getFullList(200, {});

    const allCards = await parseNonPOJO(_allCards);

    const parseForeach = await allCards.map(async (card, index) => {
            let parsedCard = await parseCard(locals, card)
            allParsedCards.push(parsedCard)
    })
    await Promise.all(parseForeach)

    allParsedCards = allParsedCards.filter(card => card.rarityValue == randomNumber);

    if(allParsedCards.length == 0) {
        return {
            message: 'No cards found',
            new: false,
            cardData: false
        }
    }

    const randomCard = allParsedCards[Math.floor(Math.random() * allParsedCards.length)];

    if(locals.user.ownedCards.includes(randomCard.id)) {
        return {
            message: 'You already own this card',
            new: false,
            cardData: false
        }
    }

    await locals.pb.collection('users').updateItem(locals.user.id, {
        ownedCards: [...locals.user.ownedCards, randomCard.id]
    })

    return {
        message: 'You got a new card!',
        new: true,
        cardData: randomCard,
    }
};