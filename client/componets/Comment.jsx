import { Typography } from '@mui/material'
import {Component, Container, Name, StyledDate} from './style/commentStyle.js'

const Comment = ({ comment }) => {
    return (
        <Component>
            <Container>
                <Name>{comment.name}</Name>
                <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
            </Container>
            <Typography>{comment.comment}</Typography>
        </Component>
    )
}
export default Comment