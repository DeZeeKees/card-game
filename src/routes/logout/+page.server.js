export const actions = {

    logout: ({ locals }) => {
        locals.pb.authStore.clear();
        locals.user = undefined;

        return {
            error: false,
            message: "Success",
            redirect: "/"
        }
    }

}