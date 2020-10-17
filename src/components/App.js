import React from 'react';

const App = () => {

    return (
        <div>
            <h1>My sandpit to play in!!!</h1>
            <p>
                <label htmlFor="country">Country:</label>
                <select list="countries" id="country" defaultValue="Guernsey">
                    <option value="Bahamas">Bahamas</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Isle of Man">Isle of Man</option>
                </select>
            </p>
        </div>
    );
};

export { App as default };