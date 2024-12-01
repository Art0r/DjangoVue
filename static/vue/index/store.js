import { reactive } from '../../libs/vue.esm-browser.js';

class User {
    constructor({ uid, name, email }) {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
}

export const store = reactive({
    selectedUser: null,
    setSelectedUser(element) {
        const userDataId = element.target.getAttribute("data-user-id");
        const userDataName = element.target.getAttribute("data-user-name");
        const userDataEmail = element.target.getAttribute("data-user-email");

        if (store.selectedUser?.uid == userDataId) return;

        store.selectedUser = new User({
            uid: userDataId,
            name: userDataName,
            email: userDataEmail
        }
        );
    }
})