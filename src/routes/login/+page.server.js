import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
    if(locals.pb?.authStore?.isValid) {
        throw redirect(303, '/');
    }
}

export const actions = {

    login: async ({ request, locals}) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {
            
            const { record, token } = await locals.pb.collection('users').authWithPassword(data.username, data.password);

        } catch (error) {
            
            return {
                error: true,
                message: error.message,
            }

        }

        return {
            error: false,
            message: "Success",
            redirect: "/"
        }
    }

}