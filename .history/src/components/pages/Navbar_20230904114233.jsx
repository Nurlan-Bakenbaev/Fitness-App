import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <Stack>
        <Link to='/'>
            <img src={'https://firebasestorage.googleapis.com/v0/b/fitness-app-fb954.appspot.com/o/logo2.jpeg?alt=media&token=cf0c70ab-b7c9-4705-bbfe-14836eca357e'} alt="Logo" />
        </Link>
        <h1 className='text-red-500'>Fitness - App</h1>
    </Stack>
    </>
  )
}

export default Navbar