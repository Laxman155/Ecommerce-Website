import React, { useState } from 'react'
import { Box, Card, Grid, Tab, Tabs } from '@mui/material'
import pic1 from '../../../image/pic1.png'
import UserLogin from './UserLogin';
import UserRegistration from './UserRegistration';
// import { ShoppingBag } from '@mui/icons-material';


const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role="tabpanel" hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}
const LoginReg = () => {

    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <Grid container sx={{ height: '90vh' }}>
                <Grid item lg={7} sm={5} sx={{
                    backgroundImage: `url(${pic1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: { xs: "none", sm: 'block' }
                }}>

                </Grid>
                <Grid item lg={4} sm={7} sx={12}>
                    <Card sx={{ width: "100%", height: "100%" }}>
                        <Box sx={{ mx: 6, height: "530px" }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                    <Tab label="Login" sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                    {/* <Tab label="Registration"></Tab> */}
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}><UserLogin /></TabPanel>
                            {/* <TabPanel value={value} index={1}><UserRegistration /></TabPanel> */}
                        </Box>
                        {/* <Box textAlign="center" sx={{mt:2}}>
                                <ShoppingBag sx={{color:'purple', fontSize:'150px'}} />
                                <Typography variant='h5' sx={{fontWeight:"bold"}}>Shop</Typography>
                            </Box> */}
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default LoginReg;