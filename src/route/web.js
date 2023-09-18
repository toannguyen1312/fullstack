// mỗi lần truy cập vào đường link web của mk thì nó sẽ chạy đầu tiên
import express from "express";
import homeController from "../controllers/homeController";



let router = express.Router();

let initWebRoutes = (app) => {

        router.get('/', homeController.getHomePage)

        return app.use('/', router)
}

module.exports = initWebRoutes;