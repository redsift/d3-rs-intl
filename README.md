# d3-rs-intl

`d3-rs-intl` is a module that includes a few Internationalization tools for D3v4.

## Builds

[![Circle CI](https://circleci.com/gh/Redsift/d3-rs-intl.svg?style=svg)](https://circleci.com/gh/Redsift/d3-rs-intl)

## Example

[View @redsift/d3-rs-intl on Codepen](https://....)

## Usage

### Browser
	
	<script src="//static.redsift.io/reusable/d3-rs-intl/latest/d3-rs-intl.umd-es2015.min.js"></script>
	<script>
		var l = d3_rs_intl.time();
		var t = d3.timeFormatLocale(l.d3).format('%c')(new Date());
	</script>

### ES6

	import { units } from "@redsift/d3-rs-intl";
	let l = units([ 'en-GB', 'en' ]);
	...
	
### Require

	var intl = require("@redsift/d3-rs-intl");
	var l = intl.units(intl.lookup('Catalan'));
	...

The main helpers in this module are `time()` and `units()` which can optionally take an array of preferred ISO 639 `language-CULTURE` or `language` values and return the appropriate formatter. This formatter can be used by [d3-format](https://github.com/d3/d3-format#locale_format) and [d3-time-format](https://github.com/d3/d3-time-format#locale_format) to emit localized values such as decimal separators, currency and day names.

If no parameters are supplied, both methods attempt to use the browser preferences.