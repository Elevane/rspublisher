import { atom } from 'recoil';

const loadingState = atom({
    key: 'loading',
    // get initial state from local storage to enable user to stay logged in
    default: false
});

export { loadingState };