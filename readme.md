# The Watch

> 📁 Minimalistic file watching

## Install

```
$ npm install the-watch
```

## Usage

```js
const theWatch = require('the-watch');

theWatch('path', (err, event, path, details) => {
  if (err) throw err;

  // handle fs event
});
```

## API

### theWatch(path, [options], cb)

#### path

Type: `string`

The path you want to watch - can be a file, a directory or an array of  files or directories.

#### options

Type: `object`

Options for [`chokidar`](https://github.com/paulmillr/chokidar)

#### cb

Type: `function`

Arguments: `err`, `event`, `path`, `details`

Will be called on every fs event

## License

MIT © [Tobias Herber](http://tobihrbr.com)
