## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Handling/creating hybrid errors, if callback pass to it else throw

## Install
```bash
npm install handle-errors
npm test
```


## Related
- [hybridables][hybridables]
- [hybridify][hybridify]
- [hybridify-all][hybridify-all]
- [handle-errors][handle-errors]
- [handle-callback][handle-callback]
- [handle-arguments][handle-arguments]
- [callback-and-promise][callback-and-promise]
- [thenify-all][thenify-all]
- [thenify][thenify]
- [thenables][thenables]


## Usage
> For more use-cases see the [tests](./test.js)

```js
var handleErrors = require('handle-errors')('pkgName');

handleErrors.error(msg[, cb]) //=> throw new Error(msg)
handleErrors.type(msg[, cb]) //=> throw new TypeError(msg)

handleErrors.error('should have arguments')
//=> Error: pkgName: should have arguments
```
> Methods are chainable, so if callback given you can chain them.


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/handle-errors
[npmjs-img]: https://img.shields.io/npm/v/handle-errors.svg?style=flat&label=handle-errors

[coveralls-url]: https://coveralls.io/r/hybridables/handle-errors?branch=master
[coveralls-img]: https://img.shields.io/coveralls/hybridables/handle-errors.svg?style=flat

[license-url]: https://github.com/hybridables/handle-errors/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/hybridables/handle-errors
[travis-img]: https://img.shields.io/travis/hybridables/handle-errors.svg?style=flat

[daviddm-url]: https://david-dm.org/hybridables/handle-errors
[daviddm-img]: https://img.shields.io/david/hybridables/handle-errors.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/hybridables/handle-errors/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 26, 2015_

[callback-and-promise]: https://github.com/thenables/callback-and-promise
[thenify-all]: https://github.com/thenables/thenify-all
[thenify]: https://github.com/thenables/thenify
[thenables]: https://github.com/thenables
[hybridables]: https://github.com/hybridables
[hybridify]: https://github.com/hybridables/hybridify
[hybridify-all]: https://github.com/hybridables/hybridify-all
[handle-callback]: https://github.com/hybridables/handle-callback
[handle-arguments]: https://github.com/hybridables/handle-arguments
[handle-errors]: https://github.com/hybridables/handle-errors