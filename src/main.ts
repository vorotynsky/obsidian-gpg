import { Plugin } from 'obsidian';


export default class ObsidianGpg extends Plugin {
	async onload() {
		await this.loadSettings();
	}

	onunload() {

	}

	async loadSettings() { }

	async saveSettings() { }
}
