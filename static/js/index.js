import { createApp, ref, watch, onMounted } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import { getLoadingUserPackages, getSelectedUser, getSelectedUserPackages } from '../vue/index/getters.js';
import { setSelectedUser } from '../vue/index/setters.js';

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