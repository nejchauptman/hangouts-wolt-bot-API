import { Value } from "../interfaces/Wolt";
import { db } from "../db";
import { CollectionReference } from "@google-cloud/firestore";
class TagRepository {
	private readonly collectionName = "tag";

	public async create(tags: Omit<Value, "id">): Promise<string> {
		const tag = await db.collection(this.collectionName).add(tags);
		return tag.id;
	}

	public findTags(): CollectionReference<Omit<Value, "id">> {
		return db.collection(this.collectionName) as CollectionReference<
			Omit<Value, "id">
		>;
	}
}
export default new TagRepository();
