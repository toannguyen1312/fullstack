// cấu hình cách tham số

import  express  from "express";

let configViewEngine  = (app) => {

    app.use(express.static('./src/public'))
    // ejs là thư viện
    app.set('view engine', 'ejs')
    // đường link tới view
    app.set('views', './src/views')
}

module.exports = configViewEngine;