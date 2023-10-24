import { atom } from 'recoil';
import { AppUser } from '../models/AppModels';

const authState = atom<AppUser>({
    key: 'auth',
    default: {
        isAuthenticated : false,
        username : ''
    }
});

export { authState };