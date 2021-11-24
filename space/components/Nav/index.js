import React, {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
//Styles
import { Wrapper, Content } from './Nav.styles';

const Nav = () => {
    const [menuState, setMenuState] = useState(false);
    const menu = useRef(null);

    const router = useRouter();

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

    const closeMenu = () => {
        if (menuState) {
            menu.current.style.top = '-2000px'
            setMenuState(false);
        } else {
            return
        }
    }

    useEffect(() => {
        const handleRouteChange = (url) => {
            closeMenu();
            console.log(`App is changing to ${url}`)
        }
        router.events.on('routeChangeStart', handleRouteChange)
    }, [menuState])


    return (
        <Wrapper>
            <Content>
                <Link href="/">
                <div className="logo">
                    <Image priority="true" height="65px" width="65px" className="nasa-logo" alt="NASA" src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" />
                </div>
                </Link>

                <div className="menu">
                    <button onClick={() => openMenu()} className="menu-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="#fff" viewBox="0 0 24 24" stroke="#fff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div ref={menu} className="open-menu">
                    <Link href="/pictures-from-this-month"><a className="nav-link">This Months Pictures</a></Link>
                    <Link href="https://api.nasa.gov/"><a className="nav-link">NASA APIs</a></Link>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Nav;