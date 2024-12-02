import { state } from './state.js';
import { Package, User } from './classes.js';
import { fetchUserPackages } from './services.js';

export function setSelectedUser(element) {
    const userDataId = element.target.getAttribute("data-user-id");
    const userDataName = element.target.getAttribute("data-user-name");
    const userDataEmail = element.target.getAttribute("data-user-email");

    if (state.selectedUser?.uid == userDataId) return;

    state.selectedUser = new User({
        uid: userDataId,
        name: userDataName,
        email: userDataEmail
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