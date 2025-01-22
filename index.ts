import { IPlugin, ICard, DataBase, HollowEvent } from "hollow-api";
import { mount, unmount } from "svelte";
import App from "./src/App.svelte";

export type Data = {
    name: string;
    color: string;
    emoji: string;
};

export default class Main implements IPlugin {
    private roots: Record<string, any> = {};
    private db: DataBase;

    constructor(db: DataBase) {
        this.db = db;
    }

    public async onCreate(cardName: string): Promise<boolean> {
        const initialData: Data = {
            name: "Example",
            color: "#FFFFFF",
            emoji: "🪐",
        };
        const requestState = await this.db.putData(cardName, initialData);
        return !!requestState;
    }

    public async onDelete(cardName: string): Promise<boolean> {
        const requestState = await this.db.deleteData(cardName);
        return !!requestState;
    }

    public async onLoad(card: ICard, app: HollowEvent): Promise<boolean> {
        const data = await this.db.getData<Data>(card.name);

        if (!data) return false;

        const targetElement = document.getElementById(card.containerID);

        if (targetElement) {
            this.roots[card.name] = mount(App, {
                target: targetElement,
                props: {
                    card,
                    app,
                    data,
                    db: this.db,
                },
            });
        }

        return true;
    }

    public onUnload(cardName: string): void {
        if (this.roots[cardName]) {
            unmount(this.roots[cardName]);
        }
    }
}
