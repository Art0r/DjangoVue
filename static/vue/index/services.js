import { state } from './state.js'

import {
    setIsLoadingUserPackages, setIsNotLoadingUserPackages, setSelectedUserPackages
} from './setters.js';

export function fetchUserPackages() {
    setIsLoadingUserPackages()
    setTimeout(() => {
        fetch(`/user_packages/${state.selectedUser.uid}`, { method: 'GET' })
            .then((res) => res.json())
            .then((json) => {
                setSelectedUserPackages(json.packages, json.uid);
            }).finally(() => { setIsNotLoadingUserPackages() });
    }, 1000);
}