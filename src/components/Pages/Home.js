import React from 'react'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Home = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item sm={10}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Cards" value="1" />
                                    <Tab label="Images" value="2" />
                                    <Tab label="Item Three" value="3" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Grid container item sm={12}  >
                                    <Grid item sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                // image="/static/images/cards/contemplative-reptile.jpg"
                                                image='https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg'
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item sm={12}  >
                                    <Grid item sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                // image="/static/images/cards/contemplative-reptile.jpg"
                                                image='https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg'
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid sm={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://c8.alamy.com/comp/W6PBEH/contact-form-icon-symbol-creative-sign-from-icons-collection-filled-flat-contact-form-icon-for-computer-and-mobile-W6PBEH.jpg"
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Lizard
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                                    species, ranging across all continents except Antarctica
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Share</Button>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="2">
                                <Grid container item sm={12}  >
                                    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                                        {itemData.map((item) => (
                                            <ImageListItem key={item.img}>
                                                <img
                                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="3">Item Three</TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}
export default Home;