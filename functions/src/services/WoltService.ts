import fetch, { RequestInit } from "node-fetch";
import TagRepository from "../repositories/TagRepository";
import { IWolt, IWoltJoiner, Value } from "../interfaces/Wolt";
import WoltRepository from "../repositories/WoltRepository";
import FirebaseMapper from "../mappers/FirebaseMapper";
import FoodRepository from "../repositories/FoodRepository";

class WoltService {
	public async findTags(): Promise<Omit<Value, "id">[]> {
		return await FirebaseMapper.getCollectionMapped(TagRepository.findTags());
	}

	public async findFiveRandom(): Promise<IWoltJoiner[]> {
		const data = await FirebaseMapper.getCollectionMapped(
			FoodRepository.getAll()
		);

		return data
			.sort(() => {
				return 0.5 - Math.random();
			})
			.slice(0, 5);
	}

	public async findAllRestaurant(): Promise<IWoltJoiner[]> {
		return await FirebaseMapper.getCollectionMapped(FoodRepository.getAll());
	}

	public async findRestaurantsMetadata(): Promise<IWoltJoiner[]> {
		return await FirebaseMapper.getCollectionMapped(FoodRepository.getAll());
	}

	public async findByName(name: string): Promise<IWoltJoiner[]> {
		return (await FirebaseMapper.getQueryMapped(
			FoodRepository.getByName(name)
		)) as IWoltJoiner[];
	}

	public async findByTag(tags: string): Promise<IWoltJoiner[]> {
		return (await FirebaseMapper.getQueryMapped(
			FoodRepository.getByTags(tags)
		)) as IWoltJoiner[];
	}

	public async loadWoltDataAndBatch(): Promise<void> {
		try {
			const response = await fetch(process.env.WOLT_API!, this.setHeaders());

			if (!response.ok) {
				throw new Error();
			}

			const fetchedData = (await response.json()) as IWolt;

			await WoltRepository.create(fetchedData);
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
