export const actions = {

    // This function is called when the logout button is clicked
    logout: ({ locals }) => {
        //logs the user out
        locals.pb.authStore.clear();
        //clears the user from the locals
        locals.user = undefined;

        //redirects the user to the home page
        return {
            error: false,
            message: "Success",
            redirect: "/"
        }
    }

}