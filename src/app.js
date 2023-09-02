const express = require("express");
const app = express();
const listViewRouter = require("./routes/list-view-router");
const listEditRouter = require("./routes/list-edit-router");
const {
  Middleware,
  validateStatusParam,
} = require("../src/middlewares/functions");

const port = 3000;

app.use(express.json());
app.use(Middleware);

listViewRouter.use(validateStatusParam);
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});