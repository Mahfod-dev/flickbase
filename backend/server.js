const app = require('./app');
const connectDB = require('./config/connectDB');

const PORT = process.env.PORT || 8000;


const start = async () => {
    try {
        await connectDB();
       app.listen(PORT, () => {
			console.log(`app listening on port ${PORT} !`.bgGreen.bold);
		});
    } catch (err) {
        console.error(err);
        process.exit(1);
    }}


start()


