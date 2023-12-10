const Post = require('../Models/Post')


module.exports = {

    async likePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try{

            const likedPost = await Post.findById(post_id)
            if(!likedPost) return res.status(400).json({message: "Post does not exist"})

            if(likedPost.likes.includes(user_id)) return res.status(400).json('Post already liked')

            likedPost.likes.push(user_id)
            await likedPost.save()

            return res.status(200).send(likedPost)

        }catch(err){
            return res.status(400).json(err)
        }
    },
    
    async dislikedPost(req,res){
        const {post_id} = req.params
        const {user_id} = req.headers

        try{
            const dislikePost = await Post.findById(post_id)
            if(!dislikePost) return res.status(400).json({message: "Post does not exist"})

            if(!dislikePost.likes.includes(user_id)) return res.status(400).json({message: "Post not liked yet"})

            dislikePost.likes.pull(user_id)
            await dislikePost.save()

            return res.status(200).json(dislikePost)

        }catch(err){

            return res.status(400).json(err)

        }

    }

}