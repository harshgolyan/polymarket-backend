import mongoose from 'mongoose';

async function connectDB () {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Database Connected!!');
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;