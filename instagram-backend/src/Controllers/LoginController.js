const User = require('../Models/User')

module.exports = {

    async login(req, res) {
        const { username, password } = req.body

        try{
            const validUsername = await User.find({username})
            if(!validUsername) return res.status(400).json({
                message: 'User does not exist'
            })
            
            const validPassword = await User.findOne({
                password: password
            }).where({
                username: username
            })
            if(!validPassword) return res.status(400).send({ message: 'invalid password'})

            const loggedIn = validPassword

            return res.status(200).json({
                message: 'Success',
                data: loggedIn
            })


        }catch(err){

        }
    }

}