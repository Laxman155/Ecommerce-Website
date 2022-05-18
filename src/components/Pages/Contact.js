import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { TextField, Box, Button, Alert, FormControlLabel, Checkbox, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import pic4 from '../../image/pic4.jpg'

const Contact = () => {

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
            tc: data.get('tc')

        }

        if (actualData.name && actualData.email && actualData.phone && actualData.address && actualData.tc !== null) {
            console.log(actualData);
            document.getElementById('contact-form').reset();
            setError({ status: true, msg: 'Successfully Contact form', type: 'success' })
            setTimeout(() => {
                navigate('/');
            }, 3000)

        } else {
            // console.log("All field are required ")
            setError({ status: true, msg: 'All field are required', type: 'error' })
        }
    }
    return (
        <>
            <Grid container justifyContent="center">
         
                <Grid item sm={10} xs={12}>
                <Card sx={{ width: "100%", height: "100%", mt: 2 }}>
                    {/* <h1>Contact Page</h1>
                    <hr /> */}

                    <Grid container sx={{ height: '75vh' }}>
                        <Grid item lg={7} sm={5} sx={{
                            backgroundImage: `url(${pic4})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: { xs: "none", sm: 'block' },
                        }} >

                        </Grid>
                        <Grid item lg={5} sm={7} sx={12}>
                           
                                <Box sx={{ mx: 6, height: "530px" }}>
                                    <Box component='form' noValidate sx={{ mt: 1 }} id="contact-form" onSubmit={handleSubmit}>
                                        <TextField margin='normal' required fullWidth id="Name" name="name" label="Name" />
                                        <TextField margin='normal' required fullWidth id="email" name="email" label="Email" />
                                        <TextField margin='normal' required fullWidth id="phone" name="phone" label="Mobile No." />
                                        <TextField margin='normal' required fullWidth id="address" name='address' label="Address" multiline rows={4} maxRows={8} />
                                        <FormControlLabel control={<Checkbox value="agree" color="primary" name='tc' id='tc' />} label="I agree to the term & condition" />
                                        <Box textAlign="center">
                                            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>submit</Button>
                                        </Box>
                                        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
                                    </Box>
                                </ Box>
                           
                        </Grid>
                    </Grid>
                    </Card>
                </Grid>
              
            </Grid>

        </>
    )
}
export default Contact;