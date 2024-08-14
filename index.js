import http from "http";
import {NewsService} from "./news-service.js";


const service = new NewsService();
const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {

        // call function get news
        service.getAllNews(req, res);

    } else if (req.method === "POST") {

        // call function create news
        service.createNews(req, res);

    } else if (req.method === "PUT") {

        // call function update news
        service.updateNews(req, res);


    } else if (req.method === "DELETE") {
        // call function delete news

        service.deleteNews(req, res);
    }

})

server.listen(3000);
