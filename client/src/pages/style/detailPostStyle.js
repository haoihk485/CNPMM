import styled from "@emotion/styled";
import { Delete, Edit } from '@mui/icons-material';
import { Typography, Box } from '@mui/material'

export const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
})

export const Heading = styled(Typography)({
    fontSize: '36px',
    fontWeight: '600',
    textAlign: 'center',
    margin: '50px 0 10px 0',
    wordBreak: 'break-word'
})

export const EditIcon = styled(Edit)({
    margin: '5px',
    padding: '5px',
    border: '1px solid #878787',
    borderRadius: '10px'
})

export const DeleteIcon = styled(Delete)({
    margin: '5px',
    padding: '5px',
    border: '1px solid #878787',
    borderRadius: '10px'
})

export const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
}));

export const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
}));