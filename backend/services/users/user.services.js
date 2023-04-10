const getAllUsers = async (req,res) => {
    try {
        res.send('users')
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    getAllUsers
}