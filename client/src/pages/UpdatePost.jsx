import { Image, StyledFormControl, TitleTextField, ContentInputField } from "./style/createPostStyle"
import createPostImage from "../assets/img/createPostImage.png"
import { Button } from "@mui/material"
import { AddCircle } from '@mui/icons-material'
import { Box } from "@mui/system"
import { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import { API } from "../../service/api.js"
import Spinner from "../../componets/Spinner.jsx"

const UpdatePost = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const imageInput = useRef(null);
    const initialPost = {
        title: '',
        content: '',
        username: '',
        categories: '',
        createdDate: new Date().toString()
    }
    const [loading, setLoading] = useState(false)

    const location = useLocation()
    const [postData, setPostData] = useState(initialPost)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(createPostImage)

    useEffect(() => {
        getPostData()
    }, [])

    const getPostData = async () => {
        if (loading) return
        setLoading(true)
        try {
            const response = await API.getPostById(id)
            if (response.success) {
                setImageUrl(response.post.imageUrl ? response.post.imageUrl : imageUrl)
                setPostData({
                    ...response.post,
                    createdDate: response.post.createdDate
                })
                console.log();
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

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

    const handleUpdate = async () => {
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
                data.append('id', id)
                data.append("name", image.name)
                data.append("file", image)
                response = await API.updatePost(data)
            } else {
                response = await API.updatePostNoImage({title: postData.title, content: postData.content, id})
            }

            if (response.success) {
                navigate(`/post/detail/${id}`)
                alert(response.message);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>{loading && <Spinner></Spinner>}
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

                    <TitleTextField placeholder="Tiêu Đề" name="title" onChange={e => handleDataChange(e)} value={postData.title}></TitleTextField>
                    <Button
                        variant='contained'
                        onClick={() => handleUpdate()}
                    >Cập Nhật</Button>

                </StyledFormControl>
                <ContentInputField
                    minRows={4}
                    placeholder="Nội dung của Blog"
                    name="content"
                    value={postData.content}
                    onChange={e => handleDataChange(e)}>
                </ContentInputField>
            </Box>

        </>
    )
}

export default UpdatePost