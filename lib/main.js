const {AutoLanguageClient} = require('atom-languageclient')

class ValaLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return ['source.vala'] }
  getLanguageName () { return 'VALA' }
  getServerName () { return 'Vala Language Server' }

  startServerProcess () {
    let vlsPath = atom.config.get('vlsPath');
    return super.spawnChildNode([ require.resolve(vlsPath || 'vala/vala-language-server') ])
  }
}

module.exports = new ValaLanguageClient();
