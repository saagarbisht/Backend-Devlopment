import {connect} from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const connectingInstance = await connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`DB connected : ${connectingInstance.connection.host}`)
    } catch (error) {
        console.log("Error : ", error)
        process.exit(1)
    }
}

export default connectDB