import swaggerAutogen from 'swagger-autogen';

const doc = {
   info: {
      title: "Users API",
      description: "Users API"
   },
   host: "https://contacts-8pm1.onrender.com",
   schemes: ["https", "http"]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.mjs'];


swaggerAutogen()(outputFile, endpointsFiles, doc);
