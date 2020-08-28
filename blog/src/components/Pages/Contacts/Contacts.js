import React from 'react';
import './Contacts.css';

const Contacts = () => {

    return (
        <div className="contacts-div">
            <div className="container">
                <h3 className="contacts-title">Contacts :</h3>
                <ul className="contacts-list">
                    <li className="contacts-list-item">Gmail : <i>Test.test@gmail.com</i></li>
                    <li className="contacts-list-item">Phone Number : <i>+8-800-555-35-35</i></li>
                    <li className="contacts-list-item">Address : <i>Pushkin's Street, Kalatushkin's House</i></li>
                </ul>
            </div>
        </div>
    );
};

export default Contacts;