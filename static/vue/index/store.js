import { reactive } from '../../libs/vue.esm-browser.js';

class User {
    constructor({ uid, name, email }) {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
}


class Package {
    constructor({ uid, name, content }) {
        this.uid = uid;
        this.name = name;
        this.content = content;
    }
}

export const store = reactive({
    selectedUserPackages: null,
    loadingUserPackages: false,

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
        });

        store.loadingUserPackages = true;
        setTimeout(() => {
            fetch(`/core/user_packages/${store.selectedUser.uid}`, { method: 'GET' })
                .then((res) => res.json())
                .then((json) => {
                    store.selectedUserPackages = json.packages.map(pkg => new Package({
                        uid: json.uid,
                        name: pkg.name,
                        content: pkg.content
                    }));
                }).finally(() => {
                    store.loadingUserPackages = false;
                });
        }, 1000);
    },
});