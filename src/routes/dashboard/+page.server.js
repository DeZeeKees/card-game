import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {

    if(locals.pb?.authStore?.isValid == false) {
        throw redirect(303, '/');
    }


}