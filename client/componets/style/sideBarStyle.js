import styled from "@emotion/styled";
import { Button, Tab, Table } from "@mui/material";

export const CreateBlogButton = styled(Button)({
    margin: '20px',
    width: '85%',
    background: '#F7EBCB',
    color: '#000',
    '&:hover': {
        backgroundColor: '#ffd468',
        color: '#f0f0f0'
    },
})

export const StyledTable = styled(Table)({
    border: '1px solid rgba(224,224,224,1)'
})