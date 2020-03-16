import React from 'react';

function Footer() {
    return(
        <footer style={footerStyle}>
            <p>TodoList</p>
        </footer>
    )
}


const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Footer;
