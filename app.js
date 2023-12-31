const express = require('express')

const app = express();


app.use(express.json());

// routes
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

app.get('/', (req, res) => {
    console.log("Hello I am App")
});

app.use("/users", userRoute)
app.use('/posts', postRoute)


app.listen(3000, _ => console.log("Server is running at port 3000"))