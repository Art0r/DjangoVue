import { reactive } from '../../libs/vue.esm-browser.js';

export const state = reactive({
    selectedUserPackages: null,
    loadingUserPackages: false,
    selectedUser: null,
});