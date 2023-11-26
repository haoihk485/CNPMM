import { styled } from '@mui/system'
import { Box, Button, Typography } from '@mui/material'

// Login & Register Page Style
export const Component = styled(Box)({
    width: '400px',
    margin: 'auto',
    boxShadow: '5px 2px 5px 2px rgb(0 0 0 / 0.3)',
    backgroundColor: '#fff',
});

export const Image = styled('img')({
    height: '150px',
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0',
});
export const Wrapper = styled(Box)({
    padding: '25px 35px',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    '& > div, & > button, & > p': {
        marginTop: '20px',
    },
});

export const LoginButton = styled(Button)({
    textTransform: 'none',
    background: '#804012',
    color: '#fff',
    height: '48px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#DB9F75',
        boxShadow: 'none',
    },
});

export const RegisterButton = styled(Button)({
    textTransform: 'none',
    background: '#fff',
    color: '#102222',
    height: '48px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px 0px rgb(0 0 0 / 0.2)',
    
});
export const Text = styled(Typography)({
    color: '#878787',
    fontSize: '12px '
})

export const Error = styled(Typography)({
    fontSize: '10px',
    color: '#ff6161',
    lineHeight: '0',
    marginTop: '10px',
    font: '600',
})

export const Container = styled(Box)({
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '95vh',
})

