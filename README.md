# generator-knack-electron

This is a Yeoman generator to scaffold a portable Knack application that doesn't require a browser (for example, for use in a kiosk setting), and is powered by Electron.

## Usage

`$ npm install -g yo generator-knack-electron`

In your project folder, run `$ yo knack-electron`. Follow the prompts, then run `$ npm run start` to start the app.

## Notes
- Embed is unstyled by default. Edit `embed/embed.css` to add your custom styles.
- You can distribute this scaffolded app via npm; for other packaging options see https://electronjs.org/docs/tutorial/application-packaging
