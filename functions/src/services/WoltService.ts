import fetch, { RequestInit } from "node-fetch";
import TagRepository from "../repositories/TagRepository";
import { IWolt } from "../interfaces/Wolt";
import WoltRepository from "../repositories/WoltRepository";
import FirebaseMapper from "../mappers/FirebaseMapper";
import FoodRepository from "../repositories/FoodRepository";

class WoltService {
	public async findTags() {
		return await FirebaseMapper.getCollectionMapped(TagRepository.findTags());
	}

	public async findFiveRandom() {
		const data = await FirebaseMapper.getCollectionMapped(
			FoodRepository.getAll()
		);

		return data
			.sort(() => {
				return 0.5 - Math.random();
			})
			.slice(0, 5);
	}

	public async findAllRestaurant() {
		return await FirebaseMapper.getCollectionMapped(FoodRepository.getAll());
	}

	public async findRestaurantsMetadata() {
		return await FirebaseMapper.getCollectionMapped(FoodRepository.getAll());
	}

	public async findByName(name: string) {
		return await FirebaseMapper.getQueryMapped(FoodRepository.getByName(name));
	}

	public async findByTag(tags: string) {
		return await FirebaseMapper.getQueryMapped(FoodRepository.getByTags(tags));
	}

	public async loadWoltDataAndBatch(): Promise<void> {
		try {
			const response = await fetch(process.env.WOLT_API!, this.setHeaders());

			if (!response.ok) {
				throw new Error();
			}

			const fetchedData = await response.json();
			await WoltRepository.create(fetchedData as IWolt);
		} catch (e) {
			throw new Error().message;
		}
	}

	private setHeaders(): RequestInit {
		return {
			method: "GET",
			headers: { connection: "keep-alive" },
		};
	}
}

export default new WoltService();
