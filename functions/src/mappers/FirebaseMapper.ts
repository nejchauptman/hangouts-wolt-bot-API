import {
	CollectionReference,
	DocumentReference,
	Query,
} from "@google-cloud/firestore";

export class FirebaseMapper {
	public async getCollectionMapped<T>(
		object: CollectionReference<T>
	): Promise<T[]> {
		const payload = await object.get();

		return payload.docs
			.filter((doc) => doc.exists)
			.map((doc) => doc.data() as T);
	}

	public async getDocumentMapped<T>(
		object: DocumentReference<T>
	): Promise<T | undefined> {
		const payload = await object.get();
		if (!payload.exists) {
			return undefined;
		}

		return payload.data() as T;
	}

	public async getQueryMapped<T>(object: Query<T>): Promise<T[]> {
		const payload = await object.get();

		return payload.docs
			.filter((doc) => doc.exists)
			.map((doc) => doc.data() as T);
	}
}
export default new FirebaseMapper();
