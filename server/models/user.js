import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: String,
    password_digest: String,
    timezone: String
}, { timestamps: { createdAt: 'created_at' } });

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
