import swaggerAutogen from "swagger-autogen";

const doc = {
   info: {
      title: "API",
      description: "API REST",
   },
   servers: [
      {
         url: "http://localhost:5000",
      },
   ],
   components: {
      schemas: {
         
      },
      securitySchemes: {
         bearerAuth: {
            type: "http",
            scheme: "bearer",
         },
      },
   },
};

const outputFile = "./src/swaggerOutput.json";
const endpointsFiles = ["./app.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc);
