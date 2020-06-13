const authProvider = {
    login: ({ username, password }) =>  {
        const request = new Request('/api/auth/register-start', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    },
    // ...
};

export default {
    login: ({ username, password }) => { /* ... */ },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // ...
};

export default {
    login: ({ username, password }) => { /* ... */ },
    logout: () => { /* ... */ },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // ...
};
export default {
    login: ({ username, password }) => { /* ... */ },
    logout: () => { /* ... */ },
    checkError: (error) => { /* ... */ },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
    // ...
};

export default {
    login: ({ username, password }) => { /* ... */ },
    logout: () => { /* ... */ },
    checkError: (error) => { /* ... */ },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject({ redirectTo: '/no-access' }),
    // ...
}


export default authProvider;

