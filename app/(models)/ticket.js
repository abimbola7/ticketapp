import mongoose, { Schema, model, models } from "mongoose";

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise


const ticketSchema = new Schema(
  {
    title : String,
    description : String,
    category : String,
    priority  : Number,
    progress : Number,
    status : String,
    active : Boolean
  },
  {
    timestamps : true
  }
)

const Ticket = models.Ticket || model("Ticket", ticketSchema);
// console.log(Ticket, "dcsjvbdknbdjbn")
export default Ticket;