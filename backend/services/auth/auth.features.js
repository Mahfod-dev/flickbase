const User = require('../../models/user.model');


const checkUser = async(email, password) => {
    console.log(email, password)

try {
    const isMatch = await User.emailExists(email);

    console.log(isMatch)

    if(isMatch){
       throw new Error('email already exists')
    }

    const user = await User.create({
        email,
        password
    })
    return user;
} catch (error) {
    throw new Error(error.message)
}

}

const generateToken = async (user) => {
	const token = await user.generateToken();
};

module.exports = {
	checkUser,
	generateToken,
};