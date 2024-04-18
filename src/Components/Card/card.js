import React from 'react';
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring';
import './card.css'

export const Card = ({ listOfTodos }) => {
    
    const transition = useTransition(listOfTodos, {
        from: {
            opacity: 0,
            width: '4%',
            marginLeft: -100,
            marginRight: 100
        },
        enter: {
            opacity: 1,
            width: '100%',
            padding: '5px 0',
            marginLeft: 0,
            marginRight: 0
        }
    });

    const fragment = transition((style, item) => {
        return <animated.ul key={item.id} style={style}>
            <li>
                <Link to={`${item.id}`}>{item.content}</Link>
            </li>
        </animated.ul>;
    });

    return (
        <>
            <div className="fragmentDiv">{fragment}</div>
        </>
    );
}