import { Plugin } from 'obsidian';


export default class ObsidianGpg extends Plugin {
	async onload() {
		await this.loadSettings();

		this.registerMarkdownCodeBlockProcessor("gpg", (src, el, context) => {
			const pre = el.createEl('pre')
			pre.addClass("secret-gpg")

			const code = pre.createEl('code')
			code.textContent = "🔐 SECRET GPG"
		})
	}

	onunload() {

	}

	async loadSettings() { }

	async saveSettings() { }
}
