const config = require("./config");
const dotenv = require("dotenv");

async function loadEnv(filepath) {
  const NODE_ENV = process.env.NODE_ENV || "development" || "production";
  const dotenvFiles = [
    `.env.${NODE_ENV}.development`,
    `.env.${NODE_ENV}.production`,
    `.env.${NODE_ENV}`,
    // Don't include `.env.development` for `test` environment
    // since normally you expect tests to produce the same
    // results for everyone
    NODE_ENV !== "production" && ".env.development",
    ".env",
  ].filter(Boolean);

  await Promise.all(
    dotenvFiles.map(async (dotenvFile) => {
      const envPath = await config.resolve(filepath, [dotenvFile]);
      if (envPath) {
        dotenv.config({ path: envPath });
      }
    })
  );
}

module.exports = loadEnv;
