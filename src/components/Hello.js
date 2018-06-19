import React from 'react';

const Hello = ({ name = 'World' }) => {
    return <p>Hello, {name}!</p>;
};

export default Hello;