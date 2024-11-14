import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    members: [
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: "users",
                required: true
            },
            role: {
                type: String,
                required: true
    }
}
],
    user: {
        type: String,
        required: true
    }
});

const Team = mongoose.model('Team', teamSchema);

export default Team;