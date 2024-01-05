import mongoose from "mongoose";



let cached =  (global as any).mongoose || {conn: null, promise: null}


export const connectToDB = async () => {
    try {
        if (cached.conn) return cached.conn;

        // if (!MONGODB_URI) throw new Error('MONGODB_URI is missing from env variables')
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error('MONGODB_URI is missing from env variables');

        await mongoose.connect(uri, {
            dbName: 'First'
        });
    } catch (error) {
        console.log('failed to connect to database', error);
    }
}