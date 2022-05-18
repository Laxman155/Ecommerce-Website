import React, { useState } from 'react'
import { TextField, Box, Button, Alert, Grid, Card } from '@mui/material'
import { useNavigate } from 'react-router';

const RePassword = () => {

    const [error, setError] = useState({ status: 'false', msg: "", type: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            password_confirmation: data.get('password_confirmation'),
            password: data.get('password'),

        }

        if (actualData.password && actualData.password_confirmation) {
            if (actualData.password === actualData.password_confirmation) {
                console.log(actualData);
                document.getElementById('password-reset-form').reset();
                setError({ status: true, msg: 'Password Reset Successfully. Redirect the login page', type: 'success' })
                setTimeout(() => {
                    navigate("/Login")
                }, 2000)
            } else {
                setError({ status: true, msg: 'Password and Confirm Password does not match', type: 'error' })
            }

        } else {
            // console.log("All field are required ")
            setError({ status: true, msg: 'All Fields are Required', type: 'error' })
        }
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item lg={4} sm={6} xs={12}>
                    <Card sx={{ width: "100%", height: "100%", mt: 2, }}>
                        <Box sx={{ mx: 6, height: "350px" }}>
                            <h1>Re Password</h1>
                            <Box component='form' noValidate sx={{ mt: 1 }} id="password-reset-form" onSubmit={handleSubmit}>
                                <TextField margin='normal' required fullWidth id="password" name="password" label="New User Password" type="password" />
                                <TextField margin='normal' required fullWidth id="password_confirmation" name="password_confirmation" label="New Confirm Password" type="password" />
                                <Box textAlign="center">
                                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
                                </Box>
                                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default RePassword;