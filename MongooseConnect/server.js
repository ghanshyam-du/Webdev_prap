import express from "express"
import mongoose from "mongoose"

const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// First we are going to establish the connection
mongoose.connect("mongodb+srv://ghanshyamd5402_db_user:saxHtNAyMqyni1zT@cluster0.on4v9nr.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDb Connected"))
    .catch(err => console.log("Mongo error", err));

// Now we are going to create Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
});

// Now using schema we are going to create model
const User = mongoose.model("User", userSchema);

// API endpoint to add user
app.post("/add-user", async (req, res) => {
    try {
        // either take body data OR hardcoded data
        const user = new User({
            firstName: "Ghanshyam",
            lastName: "Dubey",
            gender: "Male",
            email: "ghanshyam@example.com",
            jobTitle: "Developer"
        });

        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
