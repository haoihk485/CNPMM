import { useEffect, useState } from "react"
import { API } from "../service/api"
import Post from "./Post"
import { Grid } from "@mui/material"
import { useParams } from "react-router"
import { Box } from "@mui/system"
import { useSearchParams } from "react-router-dom"
import Spinner from "./Spinner"

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [searchParams] = useSearchParams()

    const category = searchParams.get('category')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPostsData()
    }, [])

    const getPostsData = async () => {
        if (loading) return
        setLoading(true)
        try {
            const response = await API.getAllPosts({ category: category || '' })
            if (response.success) {
                setPosts(response.posts)
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            {loading && <Spinner></Spinner>}
            {
                posts && posts.length > 0 ?
                    posts.map(post => {
                        return <Grid item lg={3} sm={4} xs={12} key={post._id}>
                            <Post post={post} ></Post>
                        </Grid>
                    })
                    : <Box style={{ color: '#858585', margin: 'auto', fontsize: 18 }}>Không có blog nào để hiển thị</Box>
            }
        </>
    )
}

export default Posts