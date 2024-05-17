const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to my My microservice application." });
    });

const microserviceRoutes = require('./routes/microserviceRoutes');
app.use('/api', microserviceRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))