import Logo from '../Assets/Images/inspect/Front-End/Logo/image 1.png'
import React from "react";

function Header() {
    const styles = {
        position: 'absolute',
        width: '100%',
        height: '12%',
        left: '0px',
        top: '0px',
        background: '#1F2640'
    }
    return (

        <div style={styles}>
            <img style={{position: 'absolute', width: '12%', height: '70%' ,left: '12%', top: '10%'}} src={Logo} alt='Logo'></img>
        </div>
    )
}

export default Header


