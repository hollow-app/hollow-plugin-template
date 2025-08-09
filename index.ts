import { IPlugin, ICard, DataBase, HollowEvent } from "hollow-api";
import { createRoot } from "solid-js";
import { render } from "solid-js/web";
import App from "./src/App";
import { DataType } from "./src/types/DataType"


export default class Main implements IPlugin {
	private roots: Map<string, () => void> = new Map();
	private db: DataBase;

	constructor(db: DataBase) {
		this.db = db;
	}

	public async onCreate(cardName: string): Promise<boolean> {
		const initialData: DataType = {
			name: "Example",
			color: "#FFFFFF",
			emoji: "🪐",
		};
		const request = await this.db.putData(cardName, initialData);
		return request;
	}

	public async onDelete(cardName: string): Promise<boolean> {
		const request = await this.db.deleteData(cardName);
		return request;
	}

	public async onLoad(card: ICard, app: HollowEvent): Promise<boolean> {
		const data = await this.db.getData<DataType>(card.name);

		if (!data) return false;

		const targetContainer = document.getElementById(card.containerID);

		if (targetContainer) {
			const dispose = createRoot((dispose) => {
				render(
					() => App({ card, db: this.db, app, data }), targetContainer
				);
				return dispose;
			});
			this.roots.set(card.name, dispose);
			return true
		}

		return false;
	}

	public onUnload(cardName: string): void {
		const dispose = this.roots.get(cardName);
		if (dispose) {
			dispose();
			this.roots.delete(cardName);
		}
	}


}
