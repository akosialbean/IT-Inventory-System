import React, { useState } from 'react'
import '../../index.css'
import { Box, Button, Grid, TextField } from '@mui/material'

const LoginComponent = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit = () => {
        alert(username)
    }
    return (
        <>
            <Box sx={{p:9}}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <TextField id='username' label='USERNAME' variant='outlined' name='username' type='text' size='small' onChange={(e) => setUsername(e.target.value)} value={username} fullWidth required />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <TextField id='password' label='PASSWORD' variant='outlined' name='password' type='password' size='small' onChange={(e) => setPassword(e.target.value)} value={password} fullWidth required />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} xl={12}>
                            <Button variant='contained' color='primary' type='submit' size='small' sx={{float: 'right'}} fullWidth>LOGIN</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    )
}

export default LoginComponent