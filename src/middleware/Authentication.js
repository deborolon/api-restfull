import config from "../config/config.js"

export const checkPermissions = async (req, res, next) => {
    const { permission } = req.headers
    if(permission == config.PERMISSIONS){
        next()
    } else{
        res.status(403).send("Usuario no autorizado.")
    }
}