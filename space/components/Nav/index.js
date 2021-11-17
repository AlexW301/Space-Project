import Image from 'next/image';
//Styles
import { Wrapper, Content } from './Nav.styles';

const Nav = () => {
    return (
        <Wrapper>
            <Content>
                <div className="logo">
                    <Image height="65px" width="65px" className="nasa-logo" alt="NASA" src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
                </div>

                <div className="menu">
                    <button className="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="#fff" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Nav;