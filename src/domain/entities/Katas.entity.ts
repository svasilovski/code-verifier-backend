import mongoose, { Schema } from "mongoose";

export const KatasEntity  = () => {
    let katasSchema = new mongoose.Schema(
        {
            Name: String,
            Description: String,
            Level: Number,
            User: Schema.Types.ObjectId,
            Date: Date,
            Valoration: {
                type: Number,
                min: 0,
                max: 5,
            },
            Chances: Number
        }
    );

    return mongoose.model("Katas", katasSchema);
}
