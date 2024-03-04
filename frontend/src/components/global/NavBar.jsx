import * as React from 'react'
import { useState } from 'react'
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import PropTypes from 'prop-types'; // Add this line

const drawerWidth = 240
const navItems = ['Home', 'About', 'Contact']

const NavBar = (props) => {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
            <Typography variant='h6' sx={{my: 2}}>
                Sample
            </Typography>
            <Divider sx={{color: '#fff'}} />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding sx={{fontWeight:'bold'}}>
                        <ListItemButton
                            sx={{textAlign: 'left'}}
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window().document.body : undefined


    return (
        <>
            <Box sx={{display: 'flex', flexGrow:1}}>
                <CssBaseline />
                <AppBar component='nav'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge='start'
                            onClick={handleDrawerToggle}
                            color='inherit'
                            sx={{mr:2, display:{sm:'none'}}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' component='div' sx={{flexGrow:1, display: {xs: 'none', sm: 'block'}}}>
                            Test
                        </Typography>
                        <Box
                            sx={{
                                display: {xs: 'none', sm: 'block'}
                            }}
                        >
                            {navItems.map((item) => (
                                <Button
                                    key={item} sx={{color:'#fff'}}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Button color='inherit'>Login</Button>
                    </Toolbar>
                </AppBar>
                <nav sx={{background: '#000'}}>
                    <Drawer
                        container={container}
                        variant='temporary'
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true
                        }}
                        sx={{
                            display: {ms: 'block', sm: 'none'},
                            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
            </Box>
        </>
    )
}

NavBar.propTypes = {
    window: PropTypes.func
}

export default NavBar
