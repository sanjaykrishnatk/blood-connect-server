const jsonServer = require("json-server");
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const bloodConnectServer = jsonServer.create();
bloodConnectServer.use(middleware);
bloodConnectServer.use(router);
const PORT = 3000 || process.env.PORT;
bloodConnectServer.listen(PORT, () => {
  console.log(`server running successfully at port number ${PORT}`);
});
