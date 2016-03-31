# quarterrange
Get start and end date of quarters

## Installation

```bash
$ npm install quarterrange
```

## Usage

```js
var quarter = require('quarterrange');

var firstQuarter = quarter(0);

console.log(firstQuarter);
/*
{
	from: Fri Jan 01 2016 01:00:00 GMT+0100 (CET),
	to: Fri Apr 01 2016 01:59:59 GMT+0200 (CEST)
}
*/
```

## License

Copyright (c) 2016 Dominic Bartl, [MIT License][license]

[license]: https://github.com/Bartinger/quarterrange/blob/master/LICENSE