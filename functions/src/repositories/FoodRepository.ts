import { db } from "../db";
import { IWoltJoiner } from "../interfaces/Wolt";
import { CollectionReference, Query } from "@google-cloud/firestore";
class FoodRepository {
	private readonly collectionName = "foods";

	public async create(
		food: Record<keyof IWoltJoiner, string | string[]>
	): Promise<string> {
		const tag = await db.collection(this.collectionName).add(food);
		return tag.id;
	}

	public getAll(): CollectionReference<IWoltJoiner> {
		return db.collection(
			this.collectionName
		) as CollectionReference<IWoltJoiner>;
	}

	public getByName(name: string): Query {
		return db
			.collection(this.collectionName)
			.where("lowercaseName", ">=", name.toLocaleLowerCase().trim())
			.where("lowercaseName", "<=", name.toLocaleLowerCase().trim());
	}

	public getByTags(tags: string): Query {
		console.log(Object.values(tags));
		return db
			.collection(this.collectionName)
			.where("tags", "array-contains-any", Object.values(tags));
	}
}

export default new FoodRepository();
