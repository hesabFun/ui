<script context="module">
    import {goto} from '@sveltech/routify';
    import {jwt} from './_components/_store';

    let user = {
        email: null,
        password: null,
    };


    async function handleLogin() {
        // const data = await fetch(`${process.env.API_URL}/v1/user/register`)
        const res = await fetch(`https://api.hesab.fun/v1/user/login`, {
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
            alert(data.message);
        }
    }
</script>

<div class="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
    <div class="w-full h-screen grid grid-rows-2">
        <div class="m-12">
            <a href="../" class="mt-4 p-4 bg-white-text font-light text-1xl text-center tracking-wide"><span class="">&#8592</span>
                Back to home</a>
            <h1 class="mt-8 text-2xl sm:text-4xl tracking-tight font-bold">Good afternoon!<br> Welcome back.</h1>
            <div class="max-w-6xl">
                <div>
                    <label class="hidden" for="email">Email:</label><br>
                    <input bind:value={user.email} class="text-box" type="text" id="email" name="email"
                           placeholder="Email"><br>
                    <label class="hidden" for="password">Password:</label><br>
                    <input bind:value={user.password} class="text-box" type="password" id="password" name="password"
                           placeholder="Password"><br>
                    <button class="mt-5 btn cursor-pointer" on:click={handleLogin}>Sign in</button>
                </div>
                <hr class="mt-8 w-64">
                <p class="w-64 -mt-3 mb-4 text-center"><span class="bg-white p-2">OR</span></p>
                <a href="../" class="mt-4 btn-white"><img class="btn-icon" src="images/icons/btn_google_icon.svg"
                                                          alt="hesabfun logo">Sign up with Google</a>
                <p class="mt-3 w-64 text-sm tracking-tight font-bold text-greyish">Forgot your password? <a
                        href="forgot-password" class="font-bold text-greyish-brown hover:text-butterscotch">Set new
                    password</a></p>
                <p class="mt-3 w-64 text-sm tracking-tight font-bold text-greyish">Don't have an account? <a
                        href="/signup" class="font-bold text-greyish-brown hover:text-butterscotch">Sign up</a></p>
            </div>
        </div>
    </div>
    <div class="w-full h-screen bg-greyish-brown text-white-text relative">
        <div class="m-12 flex flex-col">
            <span class="mt-14 text-6xl w-full text-center">❞</span>
            <h2 class="mt-8 text-3xl sm:text-5xl w-full text-center">It sounds extraordinary, but it's a fact that
                balance sheets can make fascinating reading.</h2>
            <h3 class="mt-16 text-2xl w-full text-center">Mary Archer</h3>
        </div>
    </div>
</div>