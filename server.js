const app = require("./app");
const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
