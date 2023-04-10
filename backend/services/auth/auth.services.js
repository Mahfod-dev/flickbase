const {checkUser} = require('./auth.features');

const register = async (req, res) => {
    try {

       const {email, password} = req.body;




         const user = await checkUser(email, password);
       
        console.log(user)

      res.status(201).json({user})
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    register
}