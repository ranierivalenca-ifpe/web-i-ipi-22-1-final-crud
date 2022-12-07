import { writable } from "svelte/store";

export const currentPage = writable('home');
export const users = writable([]);
export const currentUser = writable(null);

users.subscribe(v => {
    const user = v.at(-1);
    
    if (!user) return;

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.pw);

    fetch('http://localhost:8000/add-user.php', {
        method: 'post',
        body: formData
    });
})

export const login = (usernane, pw) => {
    console.log(`try to login with ${usernane}:${pw}`)
}