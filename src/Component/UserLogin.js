import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const UserLogin = () => {

    const auth = getAuth(app);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState(false);
    const [userEmail,setUserEmail] = useState('');

    const handleLogin = (event) =>{

        event.preventDefault();
        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setSuccess(true);
        })
        .catch((error)=>{
            setError(error.message);
            console.log(error.message);
        })

    }

    const getUserEmail = (e) =>{
        e.preventDefault();
        const email = e.target.value;
        setUserEmail(email);
    }

    const handlePasswordReset = () =>{
        if(!userEmail) return;

            sendPasswordResetEmail(auth,userEmail)
            .then(()=>{

            })
            .catch(error =>{
                console.error(error.message);
            })
        
    }

    return (
        <div className='w-50 mx-auto'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={getUserEmail} type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                {
                    success?<p className='text-success'>Successful</p>:<p className='text-danger'>{error}</p>
                }
                                <br />
                
                <br />
                <Button variant="primary" type="submit">
                    Login
                </Button>

                <p><small>Forget password? <button onClick={handlePasswordReset} className='btn btn-link'>Please reset</button> </small></p>

            </Form>
        </div>
    );
};

export default UserLogin;