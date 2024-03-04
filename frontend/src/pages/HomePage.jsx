import React from 'react'
import NavBar from '../components/global/NavBar'
import LoginComponent from '../components/homepage/LoginComponent'
import { Grid } from '@mui/material'

const HomePage = () => {
  return (
    <>
      <NavBar />

      <Grid container sx={{mt:10}}>
        <Grid item xs={12} md={9} lg={9} xl={9}>

        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={3} sx={{pt:10, px:1}}>
          <LoginComponent />
        </Grid>
      </Grid> 
    </>
  )
}

export default HomePage