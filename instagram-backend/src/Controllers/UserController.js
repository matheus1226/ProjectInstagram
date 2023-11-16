const User = require("../Models/User")

module.exports = {

    async createUser(req,res) {

        const {
            username,
            password,
            name,
            description,
            site
        } = req.body
        
        try{

            const userAlreadyExists = await User.findOne(username)

            if(!userAlreadyExists) return res.status(404).json({
                message: 'User already exist, try a different one'
            })

            const userCreated = await User.create({
                username,
                password,
                name,
                description,
                site
            })

            return res.status(200).json({
                message:'User created successfully',
                data: userCreated
            })

        }catch(err){
            return res.status(400).json({
                message: 'Erro for create user'
            })
        }
    },

    async listUser(req,res){
        try{
            const allUsers = await User.find()

            return res.status(200).json({
                message: 'All users found',
                data: allUsers
            })

        }catch(err){
            return res.status(401).json(err)
        }
    }



}