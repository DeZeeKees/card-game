import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
    if(locals.pb?.authStore?.isValid) {
        throw redirect(303, '/');
    }
}

export const actions = {

    register: async ({ locals, request }) => {

        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {

            const newUser = await locals.pb.collection('users').create(data);

            const { record, token } = await locals.pb.collection('users').authWithPassword(data.email, data.password);
            console.log(record.id);

            const updateProfile = await locals.pb.collection('users').update(record.id, {
                username: data.name,
            })

            locals.pb.authStore.clear();

        } catch (error) {

            return {
                error: true,
                message: error.message,
            }

        }

        return {
            error: false,
            message: "Success",
            redirect: "/login"
        }

    }

}