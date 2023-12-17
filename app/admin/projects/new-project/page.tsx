import React from 'react';

type Props = {
    name: string;
    age: number;
};

const MyComponent: React.FC<Props> = ({ name, age }) => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>You are {age} years old.</p>
        </div>
    );
};

export default MyComponent;
