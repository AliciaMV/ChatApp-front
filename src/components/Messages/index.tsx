//== import
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//local
import Message from "./message"; 
import { MessagesContainer} from "../../styles/components.style.js";


//== component
const Messages = () => {
  const messagesArr = useSelector((state: ChatState) => state.messages);

  // automatic scroll to bottom when more than 6msg saved
  const scrollRef = useRef(null);
  useEffect(() => {
    if (messagesArr.length > 6){
    scrollRef.current?.scrollIntoView({behavior: 'smooth',});
  }
},[messagesArr])

  return (  
      <MessagesContainer>  
        <div className="ref">
          {messagesArr.map(
              (message) => <Message key={message.id} {...message} />
          )}
        </div>
        <div ref={scrollRef} />
      </MessagesContainer>
  )
}


//== export
export default Messages;