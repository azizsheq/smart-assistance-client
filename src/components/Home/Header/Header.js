import React from 'react';
import NavBar from './NavBar/NavBar';
import './Header.css';
import {useSpring, animated} from 'react-spring';
import bannerLogo from '../../../images/sa-logo.png'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Header = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    
    return (
        <div className="top-Banner">
            <NavBar/>
            <animated.div
                className="logoCard"
                style={{backgroundImage: bannerLogo}}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />
        </div>
    );
};

export default Header;