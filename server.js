const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const http = require("http");


const port = process.env.PORT || 30001;
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
