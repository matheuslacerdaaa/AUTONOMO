import { Router } from "express";
import { readToken } from "../utils/jwt.js";

const endpointes = Router();

endpointes.get('/readToken/:token', async (req, resp) => {
    const { token } = req.params;
    const x = readToken(token);
    resp.send(x);
});

export default endpointes;