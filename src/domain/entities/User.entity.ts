import mongoose from "mongoose";
import { IUser } from "src/domain/interfaces/IUser.Interface";

export const userEntity  = () => {
    // let userSchema = new mongoose.Schema(
    //     {
    //         name: String,
    //         email: String,
    //         age: Number
    //     }
    // );

    let userSchema = new mongoose.Schema<IUser>({
        name: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: Number, required: true }
    });

    return mongoose.models.Users || mongoose.model<IUser>("Users", userSchema);
}
