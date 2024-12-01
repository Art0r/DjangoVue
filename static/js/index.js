import { createApp, ref } from '../vue/vue.esm-browser.js'

createApp({
    delimiters: ['[[', ']]'],
    setup() {
        const djangoMessage = document.querySelector('#app').dataset.message;
        const message = ref(djangoMessage);

        const changeMessage = () => {
            if (message.value == 'The message has been updated!') {
                message.value = "Ola Mundo";
                return;
            }

            message.value = "The message has been updated!";
        };

        const printMessage = () => {
            console.log(message);
        }

        return {
            message,
            changeMessage,
            printMessage
        }
    }
}).mount('#app');