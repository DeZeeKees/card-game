import { parseNonPOJO } from "$lib/helpers.js";

export const load = async ({ locals }) => {
    if(locals.user && locals.user.username) {
        return {
            user: await parseNonPOJO(locals.user)
        }   
    }
}