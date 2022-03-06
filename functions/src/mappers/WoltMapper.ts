import { IWolt } from "../interfaces/Wolt";
import { QuerySnapshot } from "@google-cloud/firestore";

export const WoltMapper = (
	wolt: QuerySnapshot<IWolt>
): QuerySnapshot<IWolt> => {
	return wolt;
};
