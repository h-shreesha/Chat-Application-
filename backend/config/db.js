const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `Mongo DB connected : ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.log(`Error: ${err.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;
