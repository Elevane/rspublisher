import { atom } from 'recoil';
import { UserSettings } from '../models/AppModels';

const userState = atom<UserSettings>({
    key: 'user',
    // get initial state from local storage to enable user to stay logged in
    default: {
        google : false
    }
});

export { userState };