import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
const router = express.Router();

app.listen(process.env.port || 8080);

app.use("/api", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", (req: express.Request, res: express.Response) =>
    res.json({ message: "Hooray! Welcome to our API." }));