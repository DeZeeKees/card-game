import { redirect } from "@sveltejs/kit";

// This function is called at page load
export const load = ({ locals }) => {
    // If the user is logged in redirect to home
    if(locals.pb?.authStore?.isValid) {
        throw redirect(303, '/');
    }
}

export const actions = {

    // This function is called when the regiser form is submitted
    register: async ({ locals, request }) => {

        //gets the form data
        const formData = await request.formData();
        //converts the form data to a POJO
        const data = Object.fromEntries([...formData]);

        try {

            //creates a new user
            const newUser = await locals.pb.collection('users').create(data);

            //logs the user in
            const { record, token } = await locals.pb.collection('users').authWithPassword(data.email, data.password);

            //updates the username of the user
            const updateProfile = await locals.pb.collection('users').update(record.id, {
                username: data.name,
            })

            //logs the user out
            locals.pb.authStore.clear();

        } catch (error) {

            return {
                error: true,
                message: error.message,
            }

        }

        //redirects the user to the login page
        return {
            error: false,
            message: "Success",
            redirect: "/login"
        }

    }

}