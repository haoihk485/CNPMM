import Comment from '../model/comment.js'
export const addComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        res.status(200).json({
            success: true,
            message: 'Tạo bình luận thành công'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Có lỗi xảy ra khi thêm bình luận'
        })
    }
}

export const getAllComment = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id })
        return res.status(200).json({
            success: true,
            comments
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}