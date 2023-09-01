const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const mongoose = require('mongoose');

app = express();


mongoose
  .connect(
    "mongodb+srv://afmtoday:OlxwPFCF0rLMnA3e@cluster0.edrrjyh.mongodb.net/datanest?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);


const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DataNest API V1',
      version: '1.0.0',
      description: 'DataNest API documentation',
    },
  },
  apis: ['./routes/*.js'], // Specify the file(s) where JSDoc annotations are present
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Route imports  
const dataNestRoutes = require("./routes/dataNestRoutes");
const userRoutes = require("./routes/userRoutes");

// Route definitions
VERSION = "v1";
app.use(`/api/${VERSION}/dataNest`, dataNestRoutes.router);
app.use(`/api/${VERSION}/user`, userRoutes.router);




app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is running on port: ${process.env.PORT || 4000}`);
});

module.exports = app;