import { atom } from 'recoil';

const userState = atom({
    key: 'user',
    // get initial state from local storage to enable user to stay logged in
    default: {
        google : false
    }
});

export { userState };