import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
    // If the user is already logged in, redirect to the home page
    if(locals.pb?.authStore?.isValid) {
        throw redirect(303, '/');
    }
}

export const actions = {

    // Handle the login form submission
    login: async ({ request, locals}) => {
        // Get the form data
        const formData = await request.formData();
        // Convert the form data to a POJO
        const data = Object.fromEntries([...formData]);

        try {
            
            // Authenticate the user
            const { record, token } = await locals.pb.collection('users').authWithPassword(data.username, data.password);

        } catch (error) {
            
            // If there was an error, return the error message
            return {
                error: true,
                message: error.message,
            }

        }

        // If the user was successfully authenticated, redirect to the home page
        return {
            error: false,
            message: "Success",
            redirect: "/"
        }
    }

}