import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const Container = styled(Box)({
    border: '1px solid #d3cede',
    borderRadius: '10px',
    margin: '10px',
    height: '350px',
    overflow: 'hidden',
    '& > p': {
        padding: '0 5px 5px 5px'
    }
})

export const Image = styled('img')({
    objectFit: 'cover',
    height: '150px',
    width: '100%'
})

export const Title = styled(Typography)({
    fontSize: '1.2rem',
    color: '#121212',
    cursor: 'pointer',
    '&:hover':{
        color: '#898989'
    }

})

export const Category = styled(Typography)({
    fontSize: '0.7rem',
    border: '1px solid #d3cede',
    margin: '2px',
    background: '#874521',
    cursor: 'pointer',
    color: '#fff',
    display: 'inline',
    cursor: 'default'
})

export const User = styled (Typography)({
    fontSize: '0.7rem',
    textDecoration: 'underline',
    cursor: 'default',
})

export const Content = styled (Typography)({
    fontSize: '1rem',
    cursor: 'default',
    color: '#676767',
    wordBreak: 'break-word'
})