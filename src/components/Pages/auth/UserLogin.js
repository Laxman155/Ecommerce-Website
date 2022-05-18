import React, { useState } from 'react'
import { TextField, Box, Button, Alert, } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const dancerAlert = () => {
    // Swal.fire({
    //     title: ' Records does not Exist !',
    //     text: 'You clicked the button.',
    //     icon: 'dancer'
    //   });
}

const UserLogin = () => {

    const [error, setError] = useState({ status: 'false', msg: "", type: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password')
        }

        const postLogin = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(actualData)
        }

        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById('login-form').reset();


            fetch('http://localhost:2000/userRoutes/userLogin', postLogin)
                .then(response => response.json())
                .then((response) => {
                    // Local.setState('user', json.stringify(userObj))
                    console.log(response, "dfgf")
                    if (response?.responseCode == 200) {
                        setError({ status: true, msg: 'Login Success', type: 'success' })

                        Swal.fire({
                            title: 'Successfully Submited !',
                            text: 'You clicked the button.',
                            icon: 'success',
                            timer: 1500
                        })
                        navigate('/dashboard');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email is Not Valid !',
                            // footer: '<a href="">Why do I have this issue?</a>',
                            timer: 1500
                        })
                    }

                });


        } else {
            // console.log("All field are required ")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'All field are required !',
                // footer: '<a href="">Why do I have this issue?</a>',
                timer: 1500
            })
            setError({ status: true, msg: 'All field are required', type: 'error' })
        }
    }

    return (
        <>
            <Box component='form' noValidate sx={{ mt: 1 }} id="login-form" onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id="email" name="email" label="Email Address" />
                <TextField margin='normal' required fullWidth id="password" name="password" label="User Password" type="password" />
                <Box textAlign="center">
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} onClick={dancerAlert}>Login</Button>
                </Box>
                <NavLink to='/ResetPassword' underline="none">Forgot Password</NavLink> &nbsp;
                <NavLink to="/register">New User</NavLink>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
            </Box>
        </>
    )
}
export default UserLogin;