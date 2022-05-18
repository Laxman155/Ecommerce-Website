import React from 'react'
import { Grid, Button, CssBaseline, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('logout clicked')
        navigate('/Login')
    }
    return (
        <>
            <CssBaseline />

            <Grid>
                <Grid item sm={2} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
                    <Typography>Hello</Typography>
                    <Button type="button" variant="contained" color='warning' size="large" onClick={handleLogout} sx={{ mt: 8 }} >LogOut</Button>
                </Grid>
                <Grid item sm={8}>
                </Grid>
            </Grid>
        </>
    )
}
export default Dashboard;