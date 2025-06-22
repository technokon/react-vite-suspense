import { useState } from 'react';

export function NameInput() {
    const [name, setName] = useState('');

    function handleNameChange($evt) {
        setName($evt.target.value);
    }

    return (
        <div className="name-input">
            <label htmlFor="name">Please enter your name:</label>
            <input id="name" onBlur={ handleNameChange } />
            {
                name && <div>Hello { name }</div> ||
                <div>Please enter your name</div>
            }
        </div>
    )
}