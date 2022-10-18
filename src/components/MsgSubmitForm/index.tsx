//== import
// npm 
import * as React from 'react';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Socket } from 'socket.io-client';
// local
import { setNewMessageValue, cleanForm } from '../../actions';
// styles
import * as styles from '../../styles/components.style';


// props
type Props = {
    socket: Socket
}

//== component
const MsgSubmit: React.FC<Props> = ({ socket }) => {
    const textContent = useSelector((state: ChatState) => state.newMessageContent);
    const author = useSelector((state: ChatState) => state.currentAuthor);
    const dispatch: Dispatch<any> = useDispatch();

    // send new message
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        socket.emit('send_message', { textContent, author });
        dispatch(cleanForm());
    }  

    // update state with input value
    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        dispatch(setNewMessageValue(e.currentTarget.value));
    }

    return (
        <styles.Footer>
            <styles.Form onSubmit={handleSubmit}>
                <styles.FormInput type="text" name="message" aria-label="yourMessage" placeholder="type here..." value={textContent} onChange={handleChange}/>
                <styles.Button type="submit">
                    SEND    
                </styles.Button>  
            </styles.Form>
        </styles.Footer>
    );
}


//== export
export default MsgSubmit;
