const main = {
    users: [],
    error: '',

    async init() {
        const users = await this.fetchUsers()
        if (users) {
            this.users = users;
        } else {
            this.error = 'An error has occured!';
        }

        this.render();
    },

    async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        return null;
    },

    render() {
        this.users.forEach((user) => {
            list.innerHTML += '<li>EMAIL: ' + user['email'] + '</li>';
        });
    }

};