export let data = {
    authUser: {
        city: "Karachi",
        country: "Pakistan",
        email: "javednihari@gmail.com",
        name: "Javed Nihari",
        password: "123456",
        role: "restaurant",
        uid: "oWG9FjUnZgROr6LGzAfNmwuJaqs2"
    }
};

export function reducer(state, action) {
    switch (action.type) {
        case "LOGIN_USER": {
            console.log(state.authUser);
            return {
                ...state,
                authUser: action.payload,
            };
        }
        case "LOGOUT_USER": {
            console.log(state.authUser);
            return {
                ...state,
                authUser: {},
            };
        }
        default:
            return state;
    }
}