import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';
const UserRegister = () => {


    const auth = getAuth(app)

    const [passwordError,setPasswordError] = useState('');
    const [success,setSuccess] = useState(false);
    const handleRegistration = (event) =>{

        event.preventDefault();

        setSuccess(false);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        if(/(?=[^A-Z\n]*[A-Z])/.test(password)){
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if(password.length<6){
            setPasswordError('Password should be at least 6 character');
            return
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setPasswordError('Please add at least one special character');
            return
        }
        setPasswordError('');

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential.user);
            setSuccess(true);
            form.reset();
        })
        .catch((error)=>{
            console.error(error);
            setPasswordError(error.message);
        })
    }

    return (
        <div>
            <h3 className='text-warning'>Please Register!!!</h3>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {success && <p className='text-success'>Account created successfully</p>}
                <p className='text-danger'>{passwordError}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default UserRegister;