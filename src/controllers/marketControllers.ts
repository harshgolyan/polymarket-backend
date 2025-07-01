
import { Request, Response } from "express";
import Market from "../models/marketModel";

export const getAllMarket = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await Market.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({error: "Cannot be fetched"})
    }
}