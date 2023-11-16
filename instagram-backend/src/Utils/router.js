const { Router } = require("express");
const UserController = require('../Controllers/UserController');
const LoginController = require("../Controllers/LoginController");
const PostController = require("../Controllers/PostController");
const router = Router();

// Rotas de usuário
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)

// Login
router.post('login', LoginController.login)

//Rotas de post

router.post('/post', PostController.createPost)
router.get('/post', PostController.listAllPosts)
router.delete('/post/:post_id', PostController.deletePost)
router.put('/post/:post_id', PostController.editPost)





// Fazer Logout
// Ver todas as fotos
// Postar uma foto
// Deletar uma foto
// Editar uma foto
// Visualizar perfil de um usuário

module.exports = router;
