import { Box, Button, TextareaAutosize } from "@mui/material"
import blankAvt from '../src/assets/img/blankAvt.png'
import { Container, StyledTextArea, Image } from "./style/commentBoxStyle"
import { useEffect, useState } from "react"
import { API } from '../service/api.js'
import Comment from "./Comment.jsx"

const CommentBox = ({ post }) => {

    const initComment = {
        username: sessionStorage.getItem('username'),
        comment: '',
        date: new Date().toString()
    }

    const [comment, setComment] = useState(initComment)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getPostsData()
    }, [post])

    const getPostsData = async () => {
        try {
            const response = await API.getAllComments(post._id)
            if (response.success) {
                setComments(response.comments)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleAddComment = async () => {
        try {
            const response = await API.addComment({ ...comment, postId: post._id })
            if (response.success) {
                setComment(initComment)
                getPostsData()
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Box>
            <Container>
                <Image src={blankAvt} alt="" />
                <StyledTextArea
                    minRows={5}
                    placeholder="Bạn nghĩ gì về blog??"
                    value={comment.comment}
                    onChange={(e) => setComment({ ...comment, comment: e.target.value })}>
                </StyledTextArea>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ height: '100%' }}
                    onClick={() => { handleAddComment() }}>
                    Bình luận
                </Button>
            </Container>
            <Box>
                {comments.map((comment, index) => {
                    return <Comment comment={comment} key={index} ></Comment>
                })}
            </Box>
        </Box >
    )
}

export default CommentBox