import swaggerAutogen from 'swagger-autogen';

const doc = {
   info: {
      title: "Users API",
      description: "Users API"
   },
   host: "localhost:3000",
   schemes: ["https", "http"]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.mjs'];


swaggerAutogen()(outputFile, endpointsFiles, doc);
