import { IWolt } from "../interfaces/Wolt";
import { db } from "../db";
import { CollectionReference } from "@google-cloud/firestore";

class WoltRepository {
	private readonly collectionName = "wolt";

	public async create(wolt: IWolt): Promise<CollectionReference<IWolt>> {
		const insertedWolt = await db.collection(this.collectionName).add(wolt);

		return insertedWolt.collection(
			this.collectionName
		) as CollectionReference<IWolt>;
	}
}
export default new WoltRepository();
