import { useState } from 'react';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
  
        <label>
          Email:
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
  
        <label>
          Message:
          <textarea
            type='text'
            placeholder='Inqueries/comments'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
  
        <button type='submit'>Submit</button>
      </form>
    );
}
