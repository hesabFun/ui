<script>
    import {goto} from '@sveltech/routify';
    import {jwt} from './_components/_store';

    let form = {
        name: null,
    }

    async function createCompany() {
        const res = await fetch(`https://api.hesab.fun/v1/companies`, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt.getToken(),
            }
        }).catch(error => {
                    console.log(error);
                }
        );

        const data = await res.json();

        if (res.status === 200) {
            $goto('select-workspace');
        } else {
            alert(data.message);
        }
    }
</script>

<div class="grid grid-flow-col grid-cols-1 grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
    <div class="w-full h-screen grid grid-rows-2 col-span-2">
        <div class="m-6">
            <div class="relative flex items-center">
                <img class="w-10" src="/hesabfun-logo.svg" alt="hesabfun logo">
                <h2 class="ml-2 text-3xl tracking-tight leading-none font-bold">Hesabfun</h2>
            </div>

            <h2 class="mt-6 lg:mt-6 text-2xl tracking-tight font-bold">Create your first company or<br> team account in Hesabfun</h2>

            <div class="relative flex items-center mt-4 lg:mt-8">
                <div class="relative flex items-center justify-center w-24 h-24 rounded-full bg-white-text border border-greyish max-w-xs">
                    <svg class="w-10" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><g><path d="M0,0h24v24H0V0z" fill="none"/><path fill="#aaa6a2" d="M12,7V3H2v18h20V7H12z M6,19H4v-2h2V19z M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2 V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M20,19h-8v-2h2v-2h-2v-2h2v-2h-2V9h8V19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z"/></g></svg>
                </div>
                <div class="relative flex items-center ml-3">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#aaa6a2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                    <span class="ml-1 h-5 tracking-tight font-bold text-greyish">Upload Brand Logo</span>
                </div>
            </div>
            <div class="max-w-6xl">
                <div>
                    <label class="hidden" for="name">Company name:</label><br>
                    <input bind:value={form.name} class="p-3 bg-white-text border border-greyish font-medium w-64" type="text" id="name" name="name" placeholder="Company name"><br>
                    <button on:click={createCompany} class="mt-5 btn cursor-pointer">Save & Next Step</button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full h-screen bg-greyish-brown text-white-text relative">
        <div class="m-4 sm:m-10 flex flex-col">
            <span class="w-16 mt-8 sm:w-24 sm:mt-6 lg:mt-0 self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f5f3f1" d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg></span>
            <h2 class="mt-5 sm:mt-10 sm:text-2xl lg:text-xl text-xl font-bold font-italic italic">Can I have any two types of account?</h2>
            <p class="mt-2 text-sm sm:text-base font-light text-white-text font-avenir">Yes, you can have a corporate account and join other companies as users.</p>
            <h2 class="mt-5 sm:mt-10 sm:text-2xl lg:text-xl text-xl font-bold font-italic italic">I am not an employee of any company, what should I do?</h2>
            <p class="mt-2 text-sm sm:text-base font-light text-white-text font-avenir">You can create an account for the company and use the service.</p>
        </div>
    </div>
</div>