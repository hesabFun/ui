import { writable } from 'svelte/store';


// const createWritableStore = (key, startValue) => {
//     const { subscribe, set } = writable(startValue);
//
//     return {
//         subscribe,
//         set,
//         useLocalStorage: () => {
//             const json = localStorage.getItem(key);
//             if (json) {
//                 set(JSON.parse(json));
//             }
//
//             subscribe(current => {
//                 // localStorage.setItem(key, JSON.stringify(current));
//                 localStorage.setItem(key, current);
//             });
//         }
//     };
// };
//
// export const jwt = createWritableStore('jwt', null);

export const jwt = writable();

