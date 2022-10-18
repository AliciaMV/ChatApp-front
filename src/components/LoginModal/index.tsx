// == import
// npm
import * as React from 'react';
import { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// local
import { setNewPasswordValue, setNewEmailValue, login } from '../../actions';
// style
import { Modal, ModalForm, ModalInput, ModalButton, ModalTitle } from '../../styles/components.style';


//== comp
const LoginModal = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const {email, password} = useSelector((state: ChatState) => state.login);

    //save email input value in state
    function handleEmailChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        dispatch(setNewEmailValue(e.currentTarget.value))
    } 

    // save updated pw input in state
    function handlePasswordChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        dispatch(setNewPasswordValue(e.currentTarget.value))
    } 

    // submit login request
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        dispatch(login());
    }

    return <Modal>
                <ModalForm onSubmit={handleSubmit}>
                    <ModalTitle>LOGIN</ModalTitle>
                    <ModalInput
                        type='text'
                        name='emailAddress'
                        aria-label='emailAddress'
                        placeholder='email address...' 
                        value={email}
                        onChange={handleEmailChange}    
                    />
                    <ModalInput
                        type='password'
                        name='password'
                        aria-label='password'
                        placeholder='password...'
                        value={password}
                        onChange={handlePasswordChange}    
                    />
                    <ModalButton>OKAY</ModalButton>
                </ModalForm>
            </Modal>

}


//== exp
export default LoginModal;