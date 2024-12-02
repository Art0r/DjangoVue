import { state } from './state.js';
import { Package, User } from './classes.js';
import { fetchUserPackages } from './services.js';

export function setSelectedUser(element) {
    const userData = element.target.getAttribute("data-user");
    const { uid, name, email } = JSON.parse(userData);

    if (state.selectedUser?.uid == uid) return;

    state.selectedUser = new User({
        uid: uid,
        name: name,
        email: email
    });

    fetchUserPackages()
}

export function setSelectedUserPackages(list, uid) {
    state.selectedUserPackages = list.map(pkg => new Package({
        uid: uid,
        name: pkg.name,
        content: pkg.content
    }));
}

export function setIsLoadingUserPackages() {
    state.loadingUserPackages = true;
}

export function setIsNotLoadingUserPackages() {
    state.loadingUserPackages = false;
}