const authModel = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async  (request, response) => {
    const {email, password} = request.body;
    const user = await authModel.getUser(email);
    if(!user) {
        return response.status(401).json({error: "Usuário não encontrado"});
    }
    if(bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({username: user.email}, process.env.SECRET_KEY)
        return response.status(200).json({token});
    }else{
        return response.status(401).json({error: "Usuário ou senha incorretos"})
    }
};

const createUser = async (request, response) => {
    const newUser = await authModel.createUser(request.body);

    return response.status(200).json(newUser);
}

const decode = (request, response) => {
    const token = request.header('Authorization');
    console.log(request.body);
    const {usuario} = request.body;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if(usuario == decoded.username){
        return response.status(200).json(request.body);
    }else{
        return response.status(401).json({error: "Usuário não cadastrado"});
    }
}

module.exports = {
    login,
    createUser,
    decode
}