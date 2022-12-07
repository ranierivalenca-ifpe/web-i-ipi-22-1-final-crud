import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);

users.subscribe(v => {
    console.log('usuário adicionado')
    console.log({v})
})