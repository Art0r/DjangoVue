import { state } from "./state.js";

export function getSelectedUser() {
    return state.selectedUser;
}

export function getSelectedUserPackages() {
    return state.selectedUserPackages;
}

export function getLoadingUserPackages() {
    return state.loadingUserPackages;
}