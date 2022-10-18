export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';
export function submitMessage() {
    return { type: SUBMIT_MESSAGE, };
}

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export function receiveMessage(data: {author: string, textContent: string}) {
    return { type: RECEIVE_MESSAGE, data};
}

export const SET_NEW_MESSAGE_VALUE = 'SET_NEW_MESSAGE_VALUE';
export function setNewMessageValue(msgCtn: string) {
    return { type: SET_NEW_MESSAGE_VALUE, msgCtn };
}

export const SET_NEW_PASSWORD_VALUE = 'SET_NEW_PASSWORD_VALUE';
export function setNewPasswordValue(pw: string) {
    return { type: SET_NEW_PASSWORD_VALUE, pw };
}

export const SET_NEW_EMAIL_VALUE = 'SET_NEW_EMAIL_VALUE';
export function setNewEmailValue(email: string) {
    return { type: SET_NEW_EMAIL_VALUE, email };
}

export const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
export function SubmitLoginForm(username: string) {
    return { type: SUBMIT_LOGIN_FORM, username };
}

export const LOGIN = "LOGIN";
export function login() {
    return { type: LOGIN, };
}

export const DISPATCH_MESSAGE = "DISPATCH_MESSAGE";
export function dispatchMessage() {
    return { type: DISPATCH_MESSAGE, };
}

export const TESTING = 'TESTING';
export function testing() {
    return { type: TESTING, };
}

export const CLEAN_FORM ='CLEAN_FORM';
export function cleanForm() {
    return { type: CLEAN_FORM, }
}

export const LOGOUT = 'LOGOUT';
export function logout() {
    return { type: LOGOUT, }
}