import { DataType } from "@type/DataType"
import { StaticsType } from "@type/StaticsType"
import { DataBase, HollowEvent, ICard } from "hollow-api"
import { showSettings } from "libs/settings"
import { createMemo, onCleanup, onMount } from "solid-js"



type AppProps = {
	card: ICard,
	db: DataBase,
	app: HollowEvent,
	data: DataType
}

export default function App({ card, db, app, data }: AppProps) {
	const statics = createMemo<StaticsType>(() => ({
		keys: {
			settings: `myplugin-${card.name}-settings`
		}
	}))



	onMount(() => {
		// more details : https://hollow-space.vercel.app/documentation/api#tool-settings-1
		app.on(statics().keys.settings, showSettings)
	})

	onCleanup(() => {
		app.off(statics().keys.settings, showSettings)
	})

	return <div></div>
}
