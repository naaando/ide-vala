const {AutoLanguageClient} = require('atom-languageclient')

class ValaLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return ['source.vala'] }
  getLanguageName () { return 'VALA' }
  getServerName () { return 'Vala Language Server' }

  getConnectionType() { return 'ipc' }

  startServerProcess () {
    return super.spawnChildNode([ require.resolve('vala/vala-language-server') ])
  }
}

module.exports = new ValaLanguageClient();
