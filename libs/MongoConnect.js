import mongoose from "mongoose";

export const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1){
        return mongoose.connection.asPromise();
    }

    return await mongoose.connect(process.env.MONGO_URI);
};

// import mongoose from "mongoose";
// import { connectMongoDB } from '@/libs/MongoConnect';

// const {MONGO_URI} = process.env

// if(!MONGO_URI){
//     throw new Error('Invalid environment variable: MONGO_URI');
// }

// export const connectMongoDB = async () => {
//     try {
//         const {connection} = await mongoose.connect(MONGO_URI)

//         if (connection.readyState === 1){
//             return Promise.resolve(true)
//         }
//     } catch (error){
//         return Promise.reject(error)
//     }
// }