<script>
    import {goto} from '@sveltech/routify';

    let user = {
        display_name: null,
        email: null,
        password: null,
    };

    async function handleRegister() {
        // const data = await fetch(`${process.env.API_URL}/v1/user/register`)
        const res = await fetch(`https://api.hesab.fun/v1/user/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(error => {
                    console.log(error);
                    alert('failed');
                }
        );

        const data = await res.json();

        if (res.status === 200) {
            jwt.set(data.token);
            $goto('/select-account-type');
        } else {
            alert(message);
        }
    }
</script>

<div class="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
    <div class="w-full h-screen grid grid-rows-2">
        <div class="m-12 h-full">
            <a href="../" class="mt-4 p-4 bg-white-text font-light text-1xl text-center tracking-wide"><span class="">&#8592</span>
                Back to home</a>
            <h1 class="mt-8 text-2xl tracking-tight font-bold">Create your free account</h1>
            <div class="max-w-6xl">
                <div>
                    <label class="hidden" for="full_name">Full name:</label><br>
                    <input bind:value={user.display_name} class="text-box" type="text" id="full_name" name="full_name"
                           placeholder="Full name"><br>
                    <label class="hidden" for="email">Email:</label><br>
                    <input bind:value={user.email} class="text-box" type="text" id="email" name="email"
                           placeholder="Email"><br>
                    <label class="hidden" for="password">Password:</label><br>
                    <input bind:value={user.password} class="text-box" type="password" id="password" name="password"
                           placeholder="Password"
                           autocomplete="new-password"><br>
                    <button class="mt-5 btn cursor-pointer" on:click={handleRegister}>Create your free account
                    </button>
                </div>
                <hr class="mt-8 w-64">
                <p class="w-64 -mt-3 mb-4 text-center"><span class="bg-white p-2">OR</span></p>
                <a href="../" class="btn-white"><img class="btn-icon" src="images/icons/btn_google_icon.svg"
                                                     alt="hesabfun logo">Sign up with Google</a>
                <p class="mt-3 w-64 text-sm tracking-tight font-bold text-greyish">By signing up, you agree to our <a
                        href="../" class="font-bold text-greyish-brown hover:text-butterscotch">communications and usage
                    terms</a></p>
                <p class="mt-3 w-64 text-sm tracking-tight font-bold text-greyish">Already have an account? <a
                        href="/signin" class="font-bold text-greyish-brown hover:text-butterscotch">Sign in</a></p>
            </div>
        </div>
    </div>
    <div class="w-full h-screen bg-greyish-brown text-white-text relative">
        <div class="m-12 flex flex-col">
            <span class="mt-14 text-6xl w-full text-center">❞</span>
            <h2 class="mt-8 text-4xl sm:text-5xl w-full text-center">Cost Accounting is enemy number one of
                productivity.</h2>
            <h3 class="mt-16 text-2xl w-full text-center">Tilman J. Fertitta</h3>
        </div>
    </div>
</div>