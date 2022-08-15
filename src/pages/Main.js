import React from 'react';

const Main = ({setIsOpen}) => {
    return (
        <main className="mainPage" onClick={() => setIsOpen(false)}>
            <h1>Main Page</h1>
            <h1>Main Page</h1>
            <h1>Main Page</h1>
        </main>
    );
};

export default Main;