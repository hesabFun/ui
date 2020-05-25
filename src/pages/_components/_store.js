// Svelte store backed by window.localStorage
// Persists store's data locally
import {writable as internal, get} from 'svelte/store'

// wraps a regular writable store
function writable(key, initialValue) {
    // create an underlying store
    const store = internal(initialValue);
    const {subscribe, set} = store;
    // get the last value from localStorage
    const json = localStorage.getItem(key);

    // use the value from localStorage if it exists
    if (json) {
        set(JSON.parse(json))
    }

    // return an object with the same interface as svelte's writable()
    return {
        // capture set and write to localStorage
        set(value) {
            localStorage.setItem(key, JSON.stringify(parseJwt(value)));
            set(value)
        },
        // capture updates and write to localStore
        update(cb) {
            const value = cb(get(store));
            this.set(value)
        },
        // punt subscriptions to underlying store
        subscribe,
        isLogin() {
            const value = JSON.parse(localStorage.getItem(key));
            return typeof value.token != 'undefined'
        },
        logout() {
            this.set(false)
        },
    }
}

function parseJwt(token) {
    if (typeof token.length != 'number') {
        return false;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    let parsedData = JSON.parse(jsonPayload);
    parsedData.token = token;
    return parsedData;
}

export const jwt = writable('jwt', false);