import { redirect } from "@sveltejs/kit";
import { parseNonPOJO, parseCard } from '$lib/helpers.js';

export const load = async ({ locals, params }) => {

    let card;

    // If the user is not logged in redirect to home
    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }

    // if cardId is undefined, redirect to dashboard
    if(params.cardId == undefined) {
        throw redirect(303, '/dashboard');
    }

    try {
        //gets the card
        card = await locals.pb.collection('cards').getFirstListItem('id="' + params.cardId + '"');
    }
    catch {
        //if the card doesn't exist, redirect to dashboard
        throw redirect(303, '/dashboard');
    }

    //parses the card into a POJO
    card = await parseNonPOJO(card);
    //adds data from related collections to the cards
    card = await parseCard(locals, card);

    //if the user doesn't own the card, redirect to dashboard
    if(locals.user.ownedCards.includes(card.id) == false) {
        throw redirect(303, '/dashboard');
    }

    //returns the card data
    return {
        cardData: card,
    }

}