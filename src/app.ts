import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "typescript-rest";

import { TryDBConnect } from "./helpers/db";

export const app: express.Application = express();

app.use(cors());
app.use(bodyParser.json());

app.use(async (req: Request, res: Response, next) => {
  await TryDBConnect(() => {
    res.json({
      error: "Database connection error, please try again later",
    });
  }, next);
});


Server.buildServices(app);


// Just checking if given PORT variable is an integer or not
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
