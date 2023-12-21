import {handleAuth, handleLogin} from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        authorizationParams: {
            // audience: 'http://localhost:8081', // or AUTH0_AUDIENCE
        },
        returnTo: "/profile"
    })
});
