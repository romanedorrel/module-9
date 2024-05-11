const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");


app.use(express.json());

app.get("/",(req, res) => {
    res.json({message: "Welcome to my MongDb Blog app"})
})

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

let postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

let commentRoutes = require('./routes/commentRoutes');

const PORT = process.env.PORT || 8181;



app.use('/api/comments', commentRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});