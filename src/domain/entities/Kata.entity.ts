import mongoose, { Schema } from "mongoose";

export const kataEntity  = () => {
    let katasSchema = new mongoose.Schema(
        {
            name: String,
            description: String,
            level: Number,
            user: Schema.Types.ObjectId,
            date: Date,
            valoration: {
                type: Number,
                min: 0,
                max: 5,
            },
            chances: Number
        }
    );
    
    return mongoose.models.Katas || mongoose.model("Katas", katasSchema);
}
