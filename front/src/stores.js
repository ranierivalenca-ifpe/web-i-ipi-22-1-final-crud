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
    }); // non blocking
    console.log('oi');
})

export const login = async (username, pw) => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pw);
    const response = await fetch('http://localhost:8000/login.php', {
        method: 'post',
        body: formData
    });
    if (!response.ok) {
        alert('usuário ou senha incorretos');
        return;
    }
    const data = await response.json();
    currentUser.set(data);
}