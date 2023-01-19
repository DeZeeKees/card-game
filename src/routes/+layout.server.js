import { parseNonPOJO } from "$lib/helpers.js";

// This function is called at page load
export const load = async ({ locals }) => {
    // If the user is logged in
    if(locals.user && locals.user.username) {
        //returns the user data
        return {
            user: await parseNonPOJO(locals.user)
        }   
    }
}