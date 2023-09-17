import express from "express";
// lấy các tham số như query params
import bodyParser from "body-parser";

// import các hàm
import viewEngine from "./config/viewEngine"
import initWebRoutes from "./route/web"

//gọi hàm config dotenv sẽ giúp chạy đc dòng dưới process.env
require('dotenv').config(); 

let app = express();


// config app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 

viewEngine(app);
initWebRoutes(app);


// tạo Port nếu ko có thì nó sẽ chạy là 6969
let port = process.env.PORT || 6969
app.listen(port, () => {

    console.log("backend nodejs is runing on the localhost:" + port)
})