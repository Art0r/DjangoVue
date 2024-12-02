import { reactive } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export const state = reactive({
    selectedUserPackages: null,
    loadingUserPackages: false,
    selectedUser: null,
});