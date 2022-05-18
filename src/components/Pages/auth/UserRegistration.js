import React, { useState } from 'react'
import { TextField, Box, Button, Alert, FormControlLabel, Checkbox, Grid, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import signup from '../../../image/signup.jpeg'
import Swal from 'sweetalert2'


const successAlert = () => {
    Swal.fire({
        title: 'Successfully Submited !',
        text: 'You clicked the button.',
        icon: 'success',
        timer: 1500

      });
}

const UserRegistration = () => {
    const [error, setError] = useState({ status: 'false', msg: "", type: "" });
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            address: data.get('address'),
            city: data.get('city'),
            confirmPassword: data.get('confirmPassword'),
            password: data.get('password'),
            tc: data.get('tc')
        }

        const postOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(actualData)
        }


        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
            if (actualData.password === actualData.confirmPassword) {

                console.log(actualData);
                document.getElementById('registration-form').reset();
                setError({ status: true, msg: 'Registration Successfully', type: 'success' })

                fetch('http://localhost:2000/userRoutes/Registration', postOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        navigate('/Login');
                    });
                    // Swal.fire ({ title: 'Successfully Submited !',
                    // text: 'You clicked the button.',
                    // icon: 'success',
                    // timer: 1500})
                    successAlert();
             

            } else {
                setError({ status: true, msg: 'Password and Confirm Password does not match', type: 'error' })
            }

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
            <Grid container justifyContent="center" display="flex">
                <Grid item sm={10} xs={12}>
                    <Card sx={{ width: "100%", height: "100%", mt: 2 }}>
                        <Grid container sx={{ height: '85vh' }}>
                            <Grid item lg={7} sm={5} sx={{
                                backgroundImage: `url(${signup})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                display: { xs: "none", sm: 'block' },
                                mt: 2,
                                height: 800,
                                width: 200
                            }} >

                            </Grid>
                            <Grid item lg={5} sm={7} sx={12}>

                                <Box sx={{ mx: 6, height: "750px" }}>
                                    <Box component='form' noValidate sx={{ mt: 1 }} id="registration-form" onSubmit={handleSubmit}>
                                        <TextField margin='normal' required fullWidth id="Name" name="name" label="Name" />
                                        <TextField margin='normal' required fullWidth id="email" name="email" label="Email Address" />
                                        <TextField margin='normal' fullWidth id="phone" name="phone" label="Mobile Number" />
                                        <TextField margin='normal' fullWidth id="address" name='address' label="Address" multiline rows={4} maxRows={8} />
                                        <TextField margin='normal' fullWidth id="city" name="city" label="City" />
                                        <TextField margin='normal' required fullWidth id="password" name="password" label="User Password" type="password" />
                                        <TextField margin='normal' required fullWidth id="confirmPassword" name="confirmPassword" label="Confirm Password" type="password" />
                                        <FormControlLabel control={<Checkbox value="agree" color="primary" name='tc' id='tc' />} label="I agree to the term  & condition" />
                                        <Box textAlign="center">
                                            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} onClick={successAlert}>SignUp</Button>
                                           
                                        </Box>
                                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                                    </Box>
                                </Box>

                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default UserRegistration;