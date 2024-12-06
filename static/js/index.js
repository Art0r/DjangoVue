import { getLoadingUserPackages, getSelectedUser, getSelectedUserPackages } from '../vue/index/getters.js';
import { setSelectedUser } from '../vue/index/setters.js';

const { createApp, ref, watch, onMounted } = Vue;


createApp({
    delimiters: ['[[', ']]'],
    setup() {
        return {
            getLoadingUserPackages,
            getSelectedUser,
            getSelectedUserPackages,
            setSelectedUser
        }
    }
}).mount('#app');