import mongoose ,{Schema} from "mongoose";

const subscriptionschema = new Schema ({

    subscriber:{
        type:Schema.Types.ObjectId,
        ref:User
    },
    channel:{
        type:Schema.Types.ObjectId,
        ref:User
    }

},{timestamps:true})

export const Subcription = mongoose.model("Subscription",subscriptionschema)