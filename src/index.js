const {Command, flags} = require('@oclif/command')

class YwCliToolCommand extends Command {
  async run() {
    const {flags} = this.parse(YwCliToolCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/index.js`)
  }
}

YwCliToolCommand.description = `Describe the command here
...
Extra documentation goes here
`

YwCliToolCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = YwCliToolCommand
