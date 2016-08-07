import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.listen(process.env.port || 8080);

app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/board", (req: express.Request, res: express.Response) => {
    
});