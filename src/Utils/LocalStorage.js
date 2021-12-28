export const yeboSetLocal = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}
export const yeboGetLocal = (key) => {
    let value = localStorage.getItem(key);
    return JSON.parse(value)
}
export const yeboClearLocal = () => {
    localStorage.clear();
}


export const yeboStorageKeys = {
    userDeatails: 'userdeatails'
}