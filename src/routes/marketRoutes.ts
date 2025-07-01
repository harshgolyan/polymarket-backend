import  express  from "express";
import { getAllMarket } from "../controllers/marketControllers";

const router = express.Router();

router.get("/markets", getAllMarket);

export default router;
