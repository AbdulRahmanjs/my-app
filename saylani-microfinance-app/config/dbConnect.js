import mongoose from "mongoose";

const dbConnect = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Databse Connected ${connect.connection.host}, ${connect.connection.name}`);
        
    } catch (error) {
     console.log(err);
        
    }
}

export default dbConnect;