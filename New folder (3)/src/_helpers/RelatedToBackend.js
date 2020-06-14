export function configureBackend() {
    let users = [{ id: 1, reference_phone_number: 'test', password: 'test', phone_number: 'Test', lastName: 'User' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // authenticate - public
                if (url.endsWith('/api/auth/login-complete') && opts.method === 'POST') {
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.reference_phone_number === params.reference_phone_number && x.password === params.password);
                    if (!user) return error('reference_phone_number or password is incorrect');
                    return ok({
                        id: user.id,
                        reference_phone_number: user.reference_phone_number,
                        phone_number: user.phone_number,
                        token: 'fake-jwt-token'
                    });
                }

                // get users - secure
                if (url.endsWith('/api/auth/login-complete') && opts.method === 'GET') {
                    if (!isLoggedIn) return unauthorised();
                    return ok(users);
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                function unauthorised() {
                    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                }

                function error(message) {
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}