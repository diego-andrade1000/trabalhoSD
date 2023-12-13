const connection = require('./connection');
const bcrypt = require('bcryptjs');

const getUser = async (email) => {
    const [[user]] = await connection.execute('SELECT * FROM users WHERE email = ?;', [email]);
    return user;
};

const createUser = async (user) => {
    const query = 'INSERT INTO users (email, password) VALUES(?, ?);';
    const {email, password} = user;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const [newUser] = await connection.execute(query, [email, hashedPassword]);

    return {insertedId : newUser.insertId};
}

module.exports  = {
    getUser,
    createUser
};