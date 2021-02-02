class Auth {
    constructor() {
        this.authenticated = false
    }

    login() {
        this.authenticated = true
    }
}

export default new Auth()