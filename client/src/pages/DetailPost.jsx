import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"
import { API } from '../../service/api.js'
import createPostImage from "../assets/img/createPostImage.png"
import { Box, Typography } from "@mui/material"
import { Container, Image, Heading, Author, EditIcon, DeleteIcon } from './style/detailPostStyle.js'
import CommentBox from "../../componets/commentBox.jsx"
import Spinner from "../../componets/Spinner.jsx"


const DetailPost = () => {
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const { id } = useParams()
    const [image, setImage] = useState(createPostImage)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getPostData()
    }, [])


    const getPostData = async () => {
        if (loading) return
        setLoading(true)
        try {
            const response = await API.getPostById(id)
            if (response.success) {
                setImage(response.post.imageUrl ? response.post.imageUrl : image)
                setPost(response.post)
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    const handleDeletePost = async (id) => {
        if (loading) return
        setLoading(true)
        try {
            const response = await API.deletePost({ id })
            if (response.success) {
                navigate('/home')
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <><Box>
            {loading && <Spinner></Spinner>}
            <Image src={image} alt="" style={{ background: '#F7EBCB' }} />

            <div style={{ width: '80%', margin: 'auto' }}>
                {(sessionStorage.getItem('username') === post.username) &&
                    <Box style={{ float: 'right' }}>
                        <EditIcon color="primary" onClick={() => navigate(`/post/update/${post._id}`)}></EditIcon>
                        <DeleteIcon color="error" onClick={() => handleDeletePost(post._id)}></DeleteIcon>
                    </Box>
                }
                <Heading>{post.title}</Heading>
                <Box>
                    <Author>Author:<Box component="span" style={{ fontWeight: 600, marginLeft: '5px' }}>{post.username}</Box></Author>
                    <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>
                </Box>
                <Typography>{post.content}</Typography>
                <CommentBox post={post}></CommentBox>
            </div >
        </Box ></>
    )
}

export default DetailPost