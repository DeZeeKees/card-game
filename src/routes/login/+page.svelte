<div>

    <div class="container">

        <div class="login">


            <h1>Login with your account</h1>

            <form on:submit|preventDefault={handleLogin}>

                <Input type="text" name="username" placeholder="Username" />

                <Input type="password" name="password" placeholder="Password" />

                <Button type="submit">Login</Button>

            </form>

            <Button type="link-nobg" href="register">No account? register here</Button>

        </div>

    </div>

</div>

<script>
    import Input from '$lib/components/Input.svelte';
    import Button from '$lib/components/Button.svelte';
    import Swal from 'sweetalert2'
    import '$lib/css/swal.css'

    async function handleLogin(event) {
        
        const form = event.target;
        const response = await fetch('?/login', {
            method: 'POST',
            accept: 'application/json',
            body: new FormData(form)
        });

        const json = await response.json();
        const data = await JSON.parse(json.data);

        form.reset();

        if(data[1] == true) {
            Swal.fire({
                title: 'Error!',
                text: 'There was an error logging in. Please try again.',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonText: 'Try Again',
                customClass: {
                    confirmButton: 'error-button',
                    title: 'myswal-font',
                    htmlContainer: 'myswal-font',
                },
            })
        }
        else {
            Swal.fire({
                title: 'Success!',
                text: 'You have successfully logged in.',
                icon: 'success',
                showConfirmButton: true,
                confirmButtonText: 'Login',
                allowOutsideClick: false,
                allowEscapeKey: false,
                customClass: {
                    confirmButton: 'success-button',
                    title: 'myswal-font',
                    htmlContainer: 'myswal-font',
                },
            }).then((result) => {
                if(result.isConfirmed) {
                    window.location.href = '/';
                }
            })
        }

    }
</script>

<style lang="less">

    .container {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

    }

    .login {

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: var(--paper-color);
        padding: 20px 40px;
        margin-top: 100px;
        border-radius: 10px;

        h1 {
            font-size: 2rem;
            font-family: 'Roboto';
            font-weight: 500;
            color: #fff;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }

    }

</style>