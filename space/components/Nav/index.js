import React, {useRef, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
//Styles
import { Wrapper, Content } from './Nav.styles';

const Nav = () => {
    const [menuState, setMenuState] = useState(false);
    const menu = useRef(null);

    const openMenu = () => {
        if (!menuState) {
            // menu.current.classList.add('show-menu');
            menu.current.style.top = '80px'
            setMenuState(true);
        } else if (menuState) {
            // menu.current.classList.remove('show-menu');
            menu.current.style.top = '-2000px'
            setMenuState(false);
        }
    }

    return (
        <Wrapper>
            <Content>
                <div className="logo">
                    <Image priority="true" height="65px" width="65px" className="nasa-logo" alt="NASA" src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
                </div>

                <div className="menu">
                    <button onClick={() => openMenu()} className="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="#fff" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div ref={menu} className="open-menu">
                    <Link href="/"><a className="nav-link">APOD Timeline</a></Link>
                    <Link href="/"><a className="nav-link">OuterSpace</a></Link>
                    <Link href="/"><a className="nav-link">NASA</a></Link>
                    <Link href="/"><a className="nav-link">More Space Shit</a></Link>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Nav;