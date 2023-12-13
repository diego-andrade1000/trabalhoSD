const axios = require('axios');
require('dotenv').config();

const login = async  (req, res) => {
    const {email, password} = req.body;
    try{
        const response = await axios.post('http://localhost:3333/login', {
            email: email,
            password: password
        });
        const data = response.data;
        return res.status(200).json({ data });
    }catch{
        return res.status(401).json({error: "email ou usuário inválido"});
    }
};

// const decode = (request, response) => {
//     const token = request.header('Authorization');
//     console.log(request.body);
//     const {usuario} = request.body;
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     if(usuario == decoded.username){
//         return response.status(200).json(request.body);
//     }else{
//         return response.status(401).json({error: "Usuário não cadastrado"});
//     }
// }

module.exports = {
    login
    // decode
}