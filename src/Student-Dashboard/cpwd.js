import React, { useState } from 'react';
import axios from 'axios';

const PasswordRecoveryForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://your-backend-api-url/password-recovery', { email });
            if (response.data.success) {
                setMessage('Password recovery email sent. Please check your inbox.');
            } else {
                setMessage('Failed to send password recovery email. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while processing your request. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Password Recovery</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

export default PasswordRecoveryForm;
