<div>
    <div class="container">

        <div class="register">

            <h1>Register your account</h1>
    
            <form on:submit|preventDefault={handleRegister}>
    
                <Input type="text" name="name" placeholder="Username" />
    
                <Input type="email" name="email" placeholder="Email" />
    
                <Input type="password" name="password" placeholder="Password" />
    
                <Input type="password" name="passwordConfirm" placeholder="Confirm Password" />
    
                <Button type="submit">Register</Button>
    
            </form>

            <Button type="link-nobg" href="login">Already have an account? login here</Button>
    
        </div>
        
    </div>
</div>

<script lang="js" type="test/javascript">
    import Input from '$lib/components/Input.svelte';
    import Button from '$lib/components/Button.svelte';
    import Swal from 'sweetalert2'
    import '$lib/css/swal.css'

    async function handleRegister(event) {

        const form = event.target;
        
        const response = await fetch('?/register', {
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
                text: 'There was an error registering your account. Please try again.',
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
                text: 'Your account has been registered.',
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
                    window.location.href = '/login';
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

    .register {

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
            padding: 0 20px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 100%;
        }

    }

</style>