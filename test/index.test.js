const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('yw-cli-tool', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('Surfs Up')
  })

  test
  .stdout()
  .do(() => cmd.run(['--name', 'jeff']))
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
