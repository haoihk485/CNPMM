import bcrypt from 'bcrypt'
import User from "../model/user.js"
import Token from "../model/token.js"
import jwt from "jsonwebtoken"
import 'dotenv/config'

export const signupUser = async (req, res) => {
    try {
        if (!req.body.username || !req.body.fullname || !req.body.password) {
            return res.status(400).json({
                success: false,
                message: 'Username, Fullname và password là bắt buộc.'
            });
        }
        const user = await User.findOne({ username: req.body.username })
        if (user) {
            return res.status(409).json({
                success: false,
                message: 'Username đã tồn tại'
            })
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const tempUser = { username: req.body.username, fullname: req.body.fullname, password: hashPassword }
        const newUser = new User(tempUser)
        await newUser.save()

        return res.status(200).json({
            success: true,
            message: 'Tạo người dùng thành công!'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Có lỗi xảy ra khi tạo người dùng'
        })
    }
}

export const loginUser = async (req, res) => {
    const user = await User.findOne({ username: req.body.username })
    if (!User) {
        return res.status(400).json({ message: 'Không tìm thấy người dùng!!' })
    }
    try {
        const passwordCompare = await bcrypt.compare(req.body.password, user.password)
        if (passwordCompare) {
            const accessToken = jwt.sign(user.toJSON(), process.env.JWT_ACCESS_SECRETKEY, { expiresIn: '1d' })
            const refreshToken = jwt.sign(user.toJSON(), process.env.JWT_REFRESH_SECRETKEY)
            const newToken = new Token({ token: refreshToken })
            await newToken.save()
            return res.status(200).json(
                { success: true, accessToken, refreshToken, username: user.username, message: 'Đăng nhập thành công!' })
        } else {
            res.status(400).json({ status: false, message: 'Mật khẩu không đúng!' })
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Xảy ra lỗi khi đăng nhập' })
    }
}