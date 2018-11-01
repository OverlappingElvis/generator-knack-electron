`use strict`

const Generator = require(`yeoman-generator`)

module.exports = class extends Generator {

  async prompts () {

    this.answers = await this.prompt([
      {
        type: `input`,
        name: `appName`,
        message: `What is the name of your Knack app?`
      },
      {
        type: `input`,
        name: `appDescription`,
        message: `What is a short description of your Knack app?`
      },
      {
        type: `input`,
        name: `appId`,
        message: `What is your application id?`
      },
      {
        type: `input`,
        name: `distributionKey`,
        message: `What is your embed's distribution key?`
      }
    ])
  }

  copy () {
    
    this.fs.copyTpl(
      this.templatePath(`package.json`),
      this.destinationPath(`package.json`),
      {
        appName: this.answers.appName.toLowerCase().split(` `).join(`-`),
        appDescription: this.answers.appDescription
      }
    )

    this.fs.copy(
      this.templatePath(`index.js`),
      this.destinationPath(`index.js`)
    )

    this.fs.copy(
      this.templatePath(`embed/embed.css`),
      this.destinationPath(`embed/embed.css`)
    )

    this.fs.copyTpl(
      this.templatePath(`embed/index.html`),
      this.destinationPath(`embed/index.html`),
      {
        appName: this.answers.appName,
        appId: this.answers.appId,
        distributionKey: this.answers.distributionKey
      }
    )
  }

  install () {

    this.npmInstall()
  }

  end () {

    this.log(`All done! Run your Electron app with "npm run start".`)
  }
}