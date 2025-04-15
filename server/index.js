//const app = require("./app");
const dotenv = require("dotenv");
const { checkConnection } = require("./src/config/db");

dotenv.config();

const PORT = process.env.PORT || 3000;

checkConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to SQL !!", error);
  });

//DB Connection ....done
