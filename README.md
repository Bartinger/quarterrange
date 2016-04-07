# quarterrange
Get start and end date of quarters

## Installation

```bash
$ npm install quarterrange
# or
$ bower install quarterrange
```

## Usage

```js
var quarter = require('quarterrange');

var firstQuarter = quarter(0);

console.log('From:', firstQuarter.from.toISOString());
console.log('To:', firstQuarter.to.toISOString());
/*
From:	2016-01-01T00:00:00.000Z
To:		2016-03-31T23:59:59.000Z
*/
```

## Test

```bash
$ npm test
```

## License

Copyright (c) 2016 Dominic Bartl, [MIT License][license]

[license]: https://github.com/Bartinger/quarterrange/blob/master/LICENSE