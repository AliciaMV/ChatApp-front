// == import
import * as React from 'react';
import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// local
import { logout } from '../../actions';
import { ToggleModalButton, HeaderContainer } from '../../styles/components.style';


// == comp
const Header = () => {
    const isLogged = useSelector((state: ChatState) => state.isLogged);
    const dispatch: Dispatch<any> = useDispatch();

    function handleClick(e: React.FormEvent) {
        e.preventDefault();
        dispatch(logout());
    };

    return(
        <HeaderContainer>
            {
                isLogged && <ToggleModalButton type='button' onClick={handleClick}>Logout</ToggleModalButton>
            }
        </HeaderContainer>
    );
}

// == export
export default Header;