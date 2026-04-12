const mongoose = require("mongoose")

const URL = 'mongodb+srv://clutchgen:clutch101@musicjam.9khvl8f.mongodb.net/?appName=musicJam';

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
           
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDB;