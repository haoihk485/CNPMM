import { Image, StyledFormControl, TitleTextField, ContentInputField } from "./style/createPostStyle"
import createPostImage from "../assets/img/createPostImage.png"
import { Button } from "@mui/material"
import { AddCircle } from '@mui/icons-material'
import { Box } from "@mui/system"
import { useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router"
import { API } from "../../service/api.js"
import Spinner from "../../componets/Spinner.jsx"

const CreatePost = () => {
    const navigate = useNavigate()

    const imageInput = useRef(null);
    const initialPost = {
        title: '',
        content: '',
        username: sessionStorage.getItem('username'),
        categories: '',
        createdDate: new Date().toString()
    }
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const [postData, setPostData] = useState(initialPost)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(createPostImage)



    const handleDataChange = e => {
        setPostData(
            {
                ...postData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleImageChange = e => {
        setImage(e.target.files[0])
        if (e.target.files.length > 0) {
            const selectedImage = e.target.files[0];
            const imageURL = URL.createObjectURL(selectedImage);
            setImageUrl(imageURL);
        }
    }

    const handleUpload = async () => {
        if (loading) return
        setLoading(true)
        try {
            let response;
            if (image) {
                const data = new FormData()
                postData.categories = await location.search?.split('=')[1] || 'All';
                postData.username = await sessionStorage.getItem('username')
                data.append('title', postData.title)
                data.append('content', postData.content)
                data.append('username', postData.username)
                data.append('categories', postData.categories)
                data.append('createdDate', postData.createdDate)
                data.append("name", image.name)
                data.append("file", image)
                response = await API.createPost(data)
            } else {
                response = await API.createPostNoImage(postData)
            }
            alert(response.message)
            if (response.success) {
                navigate('/home')
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(true)
        }
    }

    return (
        <>
            {loading && <Spinner></Spinner>}
            <Image src={imageUrl}></Image>
            <Box paddingX={'100px'}>
                <StyledFormControl >
                    <label htmlFor="image">
                        <AddCircle fontSize="large" color="action" />
                    </label>
                    <input
                        type="file"
                        name="image"
                        id='image'
                        ref={imageInput}
                        style={{ display: ' none' }}
                        onChange={e => handleImageChange(e)}
                        accept="image/png, image/jpeg" />

                    <TitleTextField placeholder="Tiêu Đề" name="title" onChange={e => handleDataChange(e)}></TitleTextField>
                    <Button
                        variant='contained'
                        onClick={() => handleUpload()}
                    >Đăng</Button>

                </StyledFormControl>
                <ContentInputField
                    minRows={4}
                    placeholder="Nội dung của Blog"
                    name="content"
                    onChange={e => handleDataChange(e)}>
                </ContentInputField>
            </Box>
        </>
    )
}

export default CreatePost