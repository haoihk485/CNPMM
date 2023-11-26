import styled from "@emotion/styled";
import { FormControl, InputBase, TextareaAutosize } from "@mui/material";

export const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'contain',
    background: '#F7EBCB'
})

export const StyledFormControl = styled(FormControl)({
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'row'
})

export const TitleTextField = styled(InputBase)({
    flex: '1',
    margin: '0 20px',
    border: '1px solid #ccc',
    '&>input': {
        padding: '0 10px',
        color: '#909090',
        fontSize: '24px'
    }
})

export const ContentInputField = styled(TextareaAutosize)({
    width: '100%',
    margin: '50px 0',
    fontSize: '18px',
    border: 'none',
    outline: 'none'
})