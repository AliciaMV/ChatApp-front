// == import
import * as React from 'react';
import { useSelector } from 'react-redux';
// styles
import { MessageBubble, Author, MessageBlock } from '../../styles/components.style.js';


//== props
type Props = {
    textContent: string
    author: string
}

//== comp
const Message: React.FC<Props> = ({ textContent, author }) => {
    const userCurrent = useSelector((state: ChatState) => state.currentAuthor);
    
    return(
        <MessageBlock isMine={userCurrent === author ? true : false }>
            <Author>
                {author}
            </Author>
            <MessageBubble>
                    {textContent}
            </MessageBubble>  
        </MessageBlock>
    )
}


// == export
export default Message;