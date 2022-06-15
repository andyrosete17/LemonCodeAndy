const result = require("dotenv").config({
  path: "./.env",
});

console.log("andy aqui entramos", result);
export const { API_KEY } = result.parsed;
