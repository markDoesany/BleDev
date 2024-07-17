const { mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async() => {
  if(connection.isConnected){
    console.log('Using existing connection');
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error.message); 
  }
}