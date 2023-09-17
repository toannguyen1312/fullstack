// mỗi lần truy cập vào đường link web của mk thì nó sẽ chạy đầu tiên
import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {

        router.get('/', (req, res) => {
            return res.send("nguyễn việt toàn")
        })

        return app.use('/', router)
}

module.exports = initWebRoutes;