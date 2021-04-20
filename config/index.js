const path = require('path')
let config = {
    viewsDir:path.join(__dirname, '../', "views"),

};

//NODE-ENV = development production
if (process.env.NODE_ENV === "development") {
    const devConfig = {
        port: 3000,
        caches:false
    };
    config = {
        ...config,
        ...devConfig
    };
}
if (process.env.NODE_ENV === "production") {
    const prodConfig = {
        port: 8081,
        caches:'memory'
    };
    config = {
        ...config,
        ...prodConfig
    };
}
module.exports = config;
