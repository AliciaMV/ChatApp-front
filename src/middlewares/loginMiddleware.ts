// == import
import axios from 'axios';
import { TESTING, LOGIN, SubmitLoginForm } from '../actions';

let baseUrl = 'http://localhost:3004';

const loginMiddleware: Middleware<ChatState, ChatActions> = (api) => (next) => (action) => {
    switch (action.type) {
        // testing server connection
        case TESTING: {
            axios.get(`${baseUrl}/api`)
                .then((res) => {
                    console.log(`testounet ${res.data}`);
                }).catch(() => {
                    console.log('ko');
                });
            next(action);
            break;
        }

        case LOGIN: {
            const state: ChatState = api.getState();
            const { email, password } = state.login;
            
            axios.post(`${baseUrl}/login`, 
                {
                    email: email,
                    password: password,
                },
            ).then((res) => {
                api.dispatch(SubmitLoginForm(res.data))
            }).catch((er) => {
                console.log(er);
            });
            next(action);
            break;
        }

        default:
            next(action);
    }
};


// == exp
export default loginMiddleware;
