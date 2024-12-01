import { createApp, ref, watch, onMounted } from '../libs/vue.esm-browser.js';
import { store } from '../vue/index/store.js';

createApp({
    delimiters: ['[[', ']]'],
    setup() {
        return {
            store,
        }
    }
}).mount('#app');