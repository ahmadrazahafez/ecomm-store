import jwt from "jsonwebtoken"

const adminauth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "No token provided" })
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Token is not correct" })
    }

    next()
  } catch (error) {
    res.json({ success: false, error: error.message })
  }
}

export default adminauth
