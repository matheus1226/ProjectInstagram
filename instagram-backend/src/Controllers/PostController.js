const Post = require('../Models/Post')


module.exports = {
    async createPost(req,res){
        const {
            picture,
            description
        } = req.body

        const { user } = req.headers

        try{
            const newPost = await Post.create({
                picture,
                description,
                user
            })

            return res.status(200).json({
                message: 'Post created', 
                body: newPost
            })

        }catch(err){

            return res.status(400).json(err)

        }

    },

    async listAllPosts(req,res){

        try{
            const allPosts = await Post.find().populate('user')
            if(!allPosts) return res.status(400).json({
                message: 'Post not found'
            })

            return res.status(200).json({
                message:"All posts",
                body: allPosts
            })

        }catch(err){
            return res.status(400).json(err)
        }

    },
    async deletePost(req,res){
        const {post_id} = req.body
        const {user_id} = req.headers


        try{

            const belongToUser = await Post.findOne({ user: user_id }).where({ _id: post_id})
            if(!belongToUser) return res.status(400).json({
                message: 'Operation not allowed'
            })

            const postExist = await Post.findById(post_id)
            if(!postExist) return res.status(400).json({

            })

            const deletedPost = await Post.findByIdAndDelete(post_id)

            return res.status(200).json({
                message: 'Deleted successfully',
                body: deletedPost
            })
        }catch(err){

            return res.status(400).json(err)

        }



    },
    async editPost(req, res){
        const { post_id } = req.params
        const { description } = req.body
        const { user_id } = req.headers

        try{
            const belongToUser = await Post.findOne({ user: user_id }).where({ _id: post_id})
            if(!belongToUser) return res.status(400).json({
                message: 'Operation not allowed'
            })

            const editPost = await Post.findByIdAndUpdate(post_id, {
                description
            }, {
                new: true
            })

            return res.status(200).json({
                message: 'Updated successfully',
                data: editPost
            })
        } catch(err) {
            return res.status(400).json(err)
        }

    }

}