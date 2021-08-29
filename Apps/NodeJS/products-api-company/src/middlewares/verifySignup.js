import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const user = await User.findOne({username: req.body.username})
    if (user) return res.status(400).json({message: 'The user already exits'})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: 'The email already exits'})

    next()
}

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let index = 0; index < req.body.roles.length; index++) {
            if (!ROLES.includes(req.body.roles[index])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[index]} does not exists`
                })
            }
        
        }
    }
    next()
}