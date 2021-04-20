//router maniagement
const IndexController = require('./IndexController')
const Router = require("@koa/router");
const ApiController = require('./ApiController');
const apiController = new ApiController
const router = new Router();
const indexController = new IndexController
//add router into this func 
function initController(app) {
  router.get("/", indexController.actionIndex);
  router.get('/api/getDataList', apiController.actionDataList)
  app.use(router.routes()).use(router.allowedMethods());
}

module.exports = initController;
