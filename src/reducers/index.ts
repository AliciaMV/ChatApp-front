//== imp
import { SUBMIT_MESSAGE, SET_NEW_MESSAGE_VALUE, SET_NEW_EMAIL_VALUE, SET_NEW_PASSWORD_VALUE, SUBMIT_LOGIN_FORM, RECEIVE_MESSAGE, CLEAN_FORM, LOGOUT } from "../actions";
import { getLastMsgId } from "../selectors";

// state
const initialState = {
    currentAuthor: '',
    messages: [],
    newMessageContent: '',
    login: {
            email: '',
            password: '',
        },
    isLogged: false,
};


//== reducer
function rootReducer(state: ChatState = initialState, action: ChatActions): ChatState {
    switch (action.type) {
        case SUBMIT_MESSAGE: {
         return {
             ...state,
             messages: [
                 ...state.messages,
                 {
                     id: getLastMsgId(state)+1,
                     textContent: state.newMessageContent,
                     author: state.currentAuthor,
                 },
             ],
             newMessageContent: '',
         };
        }
        case CLEAN_FORM: {
         return {
             ...state,
             newMessageContent: '',
         };
        }
        case RECEIVE_MESSAGE: {
         return {
             ...state,
             messages: [
                 ...state.messages,
                 {
                     id: getLastMsgId(state)+1,
                     textContent: action.data.textContent,
                     author: action.data.author,
                 },
             ],
         };
        }
        case SET_NEW_MESSAGE_VALUE: {
         return {
             ...state,
             newMessageContent: action.msgCtn,
         };
        }
        case SET_NEW_EMAIL_VALUE: {
         return {
             ...state,
             login: {
                 ...state.login,
                     email: action.email,
                 },
             }; 
         }
         case SET_NEW_PASSWORD_VALUE: {
             return {
                 ...state,
                 login: {
                     ...state.login,    
                         password: action.pw,
                 },
             };
         }
         case SUBMIT_LOGIN_FORM: {
             return {
                 ...state,
                 currentAuthor: action.username,
                 login: {
                     ...state.login,
                         email: '',
                         password:'',
                     },
                 isLogged: true,
             };
         }
         case LOGOUT: {
             return {
                 ...state,
                 messages: [],
                 currentAuthor: '',
                 isLogged: false,
             };
         }

        default:
            return state;
    }
}

//== export
export default rootReducer;