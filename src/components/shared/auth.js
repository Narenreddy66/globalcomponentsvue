export default function isAuthenticated() {
    return localStorage.getItem('user') !== null;
}