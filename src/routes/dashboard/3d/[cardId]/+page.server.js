import { redirect } from "@sveltejs/kit";
import { parseNonPOJO, parseCard } from '$lib/helpers.js';

export const load = async ({ locals, params }) => {

    let card;

    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }

    if(params.cardId == undefined) {
        throw redirect(303, '/dashboard');
    }

    try {
        card = await locals.pb.collection('cards').getFirstListItem('id="' + params.cardId + '"');
    }
    catch {
        throw redirect(303, '/dashboard');
    }

    card = await parseNonPOJO(card);
    card = await parseCard(locals, card);

    if(locals.user.ownedCards.includes(card.id) == false) {
        throw redirect(303, '/dashboard');
    }


    return {
        cardData: card,
    }

}