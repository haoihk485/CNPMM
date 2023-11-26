import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../assets/img/404.jpg'

const NotFound = () => {
    return (
        <div className="not-found" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '70vh'
        }}>
            <img
                src={error404}
                alt="not-found"
                style={{
                    width: '300px'
                }}
            />
            <Link to="/home" className="link-home"
                style={{
                    backgroundColor: '#FC999C',
                    color: 'white',
                    padding: '10px 20px',
                    fontSize: '16px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    outline: 'none',
                    textDecoration: 'none',
                }}>
                Go Home
            </Link>
        </div>
    )
}

export default NotFound;
