import { useNavigate } from "react-router-dom";
import { Container, Image, Title, Category, User, Content } from "./style/postStyle.js"

const Post = ({ post }) => {
    const navigate = useNavigate()

    function truncateString(str, maxLength) {
        if (str.length > maxLength) {
            return str.substring(0, maxLength - 3) + '...';
        } else {
            return str;
        }
    }

    return <Container>
        <Image src={post.imageUrl} alt="" />
        <Category>{post.categories[0]}</Category>
        <Title onClick={() => navigate(`/post/detail/${post._id}`)}>{post.title}</Title>
        <User>{post.username}</User>
        <Content>{truncateString(post.content, 80)}</Content>
    </Container>
}

export default Post