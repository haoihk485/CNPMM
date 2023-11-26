import cloudinary from "../config/cloudinary.js"
import post from "../model/post.js"
import Post from '../model/post.js'

export const createPost = async (req, res) => {
    try {
        const image = req.file

        const imageInfo = await cloudinary.uploader.upload(image.path)

        const tempPost = {
            title: req.body.title,
            content: req.body.content,
            username: req.body.username,
            categories: req.body.categories,
            createdDate: req.body.createdDate,
            imageUrl: imageInfo.secure_url,
            publicId: imageInfo.public_id
        }

        const newPost = new Post(tempPost)
        await newPost.save()

        return res.status(200).json({
            success: true,
            message: 'Đăng blog thành công'
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const createPostNoImage = async (req, res) => {
    try {
        const tempPost = {
            title: req.body.title,
            content: req.body.content,
            username: req.body.username,
            categories: req.body.categories,
            createdDate: req.body.createdDate,
            imageUrl: null,
            publicId: null
        }

        const newPost = new Post(tempPost)
        await newPost.save()

        return res.status(200).json({
            success: true,
            message: 'Đăng blog thành công'
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const getAllPosts = async (req, res) => {
    const category = req.query.category
    let posts;
    try {
        if (category) {
            posts = await Post.find({
                categories: {
                    $in: [category]
                }
            })
        }
        else {
            posts = await Post.find()
        }
        return res.status(200).json({
            success: true,
            posts
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Có lỗi xảy ra khi lấy dữ liệu'
        })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json({
            success: true,
            post
        })
    } catch {
        return res.status(500).json({
            success: false,
            message: 'Có lỗi xảy ra'
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.body.id);
        const image = req.file

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bài viết'
            })
        }
        if (post.publicId) {
            await cloudinary.uploader.destroy(post.publicId)
        }

        const imageInfo = await cloudinary.uploader.upload(image.path)

        const tempPost = {
            title: req.body.title,
            content: req.body.content,
            imageUrl: imageInfo.secure_url,
            publicId: imageInfo.public_id
        }

        await Post.findByIdAndUpdate(req.body.id, { $set: tempPost })

        return res.status(200).json({
            success: true,
            message: 'Update blog thành công'
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const updatePostNoImage = async (req, res) => {
    try {
        const post = await Post.findById(req.body.id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bài viết'
            })
        }
        const tempPost = {
            title: req.body.title,
            content: req.body.content,
        }

        await Post.findByIdAndUpdate(req.body.id, { $set: tempPost })

        return res.status(200).json({
            success: true,
            message: 'Update blog thành công'
        })
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.body.id);
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Không tìm thấy bài viết'
            })
        }

        await post.deleteOne()

        return res.status(200).json({
            success: true,
            message: 'Xóa blog thành công'
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        })
    }
}
