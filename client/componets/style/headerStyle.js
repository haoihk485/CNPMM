import styled from "@emotion/styled";
import { AppBar, Toolbar } from "@mui/material";

export const Component = styled(AppBar)({
    background: '#ffffff',
    color: '#000'
})

export const Container = styled(Toolbar)({
    justifyContent: "center",
    '& > a': {
        padding: '20px',
        color: '#000',
        textDecoration: 'none',
    }
})