import Router from "express-promise-router";
import WoltService from "../services/WoltService";
const foodRouter = Router();

foodRouter.get("/", async (req, res) => {
	res.json(await WoltService.loadWoltDataAndBatch());
});

foodRouter.get("/findByTag", async (req, res) => {
	res.json(await WoltService.findByTag(req.query as unknown as string));
});

foodRouter.get("/randomFive", async (req, res) => {
	res.json(await WoltService.findFiveRandom());
});

foodRouter.get("/findRestaurants", async (req, res) => {
	res.json(await WoltService.findAllRestaurant());
});

foodRouter.get("/findRestaurants/:name", async (req, res) => {
	res.json(await WoltService.findByName(req.params.name));
});

foodRouter.get("/findRestaurantsMetadata", async (req, res) => {
	res.json(await WoltService.findRestaurantsMetadata());
});

export default foodRouter;
