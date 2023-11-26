import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]


    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Không đủ quyền truy cập'
        })
    }

    jwt.verify(token, process.env.JWT_ACCESS_SECRETKEY, (error, user) => {
        if (error) {
            return res.status(401).json({
                success: false,
                message: 'Không đủ quyền truy cập'
            })
        }
        req.user = user
        next()
    })
}