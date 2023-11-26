import styled from "@emotion/styled";
import { Box, TextareaAutosize } from "@mui/material";

export const Container = styled(Box)({
    marginTop: '100px',
    display: 'flex'
})

export const Image = styled('img')({
    width: '50px',
    height: '50px',
    borderRadius: '50%'
})

export const StyledTextArea = styled(TextareaAutosize)({
    height: '100px',
    width: '100%',
    margin: '0 20px'
})