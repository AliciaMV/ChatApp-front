// == import
// npm
import React, { useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io, Socket } from 'socket.io-client';
// local
import LoginModal from '../LoginModal';
import Messages from '../Messages';
import MsgSubmitForm from '../MsgSubmitForm';
import Header from '../Header';
import { receiveMessage } from '../../actions';
// styles
import { GlobalStyle} from '../../styles/components.style';


//== var
const ENDPOINT = "http://localhost:3004";
const socket: Socket = io(ENDPOINT);

//== comp
function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const currentAuthor = useSelector((state: ChatState) => state.currentAuthor);

  useEffect(() => {
    socket.on('receive_message', (data: {author: string, textContent: string}) => {
      if(data.author !== currentAuthor) {
        dispatch(receiveMessage(data));
      }
    })
  }, []);


  const isLogged = useSelector((state: ChatState) => state.isLogged);
  
  return (
    <div>
    <GlobalStyle />
      {
        !isLogged && <LoginModal />
      }
      {
        isLogged && <Header />
      }
      {
        isLogged && <Messages />
      }
      <MsgSubmitForm socket={socket} />
    </div>
  );
}


//== export
export default App;
