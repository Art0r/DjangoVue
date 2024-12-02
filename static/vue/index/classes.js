export class User {
    constructor({ uid, name, email }) {
        this.uid = uid;
        this.name = name;
        this.email = email;
    }
}


export class Package {
    constructor({ uid, name, content }) {
        this.uid = uid;
        this.name = name;
        this.content = content;
    }
}
