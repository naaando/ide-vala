# IDE-VALA package

Vala language support for Atom-IDE, powered by [Vala Language Server](https://github.com/benwaffle/vala-language-server).

Requires [Atom >1.21](https://atom.io/).

## Features
- [x] Syntax highlight
- [x] Code completion \[WIP]
- [ ] Hover
- [ ] Jump to def
- [ ] Workspace symbols
- [ ] Find references
- [x] Diagnostics
- [ ] Refactoring

## Installation

Download the repository and install

```bash
cd ide-vala/
apm install
apm link
```
You should also download and compile the [Vala Language Server](https://github.com/benwaffle/vala-language-server), instructions on how to compile can be found in the repo, but for convenience

```bash
meson build
ninja -C build
```
Now find ide-vala on atom packages and **go on settings and set the binary path or just install the language server system-wide**

## Development

This package is currently in development. You should also install the [atom-ide-ui](https://atom.io/packages/atom-ide-ui) package to expose the functionality within Atom.

## Contributing
Always feel free to help out!

## License
GPL License.  See [the license](LICENSE.md) for more details.
