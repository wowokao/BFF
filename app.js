const koa = require('koa');
const app = new koa();
const config = require('./config');
const initController = require('./controllers')
const render = require('koa-swig')
const co = require('co')
app.context.render = co.wrap(render({
    root: config.viewsDir,
    cache: config.cache, // disable, set to false
  }));

initController(app)

app.listen(config.port, () => {
    console.log(`server is running at http://localhost:${config.port}`)
})