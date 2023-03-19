import { useState, useEffect } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        setName('');
        setEmail('');
        setMessage('');

        alert(`Submitted! Thank you, ${name}!`)
    };

    return (
        <div style={{ display: 'inline-block', overflow: 'hidden', alignSelf:"center" }} className="contact text-center m-14 py-11 rounded-lg border-2 border-solid border-emerald-600 bg-gray-300">
            <div className="p-3">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-2xl font-semibold pb-2'>Contact Me</h1>
                    <div className="form-inputs ">
                        <div className="form-item p-1">
                            <label className='text-xl'>
                                Name:
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="input input-primary input-bordered input-md w-full max-w-xs mx-3"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-item p-1">
                            <label className='text-xl'>
                                Email:
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-primary input-bordered input-md w-full max-w-xs mx-3"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-item p-2">
                            <label className='text-xl'>
                                Message:
                                <textarea
                                    rows='5'
                                    cols='45'
                                    type='text'
                                    placeholder='Inqueries/comments'
                                    className="textarea textarea-primary mx-3"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </label>
                        </div>
                        <button className='btn btn-primary btn-outline' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;