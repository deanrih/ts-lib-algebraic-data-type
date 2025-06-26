# NOTE

This is not intended for public/general use as the helper/utility aspect is very specific and very shallow, use [`ts-results-es`](https://github.com/lune-climate/ts-results-es) package directly instead.
# @deanrih/ts-lib-algebraic-data-type

A helper library for Rust's Result and Option objects, utilizing and extending the [`ts-results-es`](https://github.com/lune-climate/ts-results-es) package.

## Installation

```sh
# Bun
bun add @deanrih/ts-lib-algebraic-data-type
# pnpm
pnpm add @deanrih/ts-lib-algebraic-data-type
# npm
npm install @deanrih/ts-lib-algebraic-data-type
```

## Usage

```ts
import { Err, Ok, type Result } from "@deanrih/ts-lib-algebraic-data-type";

function fetchSomething(): Result<string> {
	const shouldOk = Math.random() < 0.5;

	if (shouldOk) {
		return Ok("Success to fetch data");
	} else {
		return Err(new Error("Failed to fetch data"));
	}
}

function main() {
	const result = fetchSomething();

	if (result.isErr()) {
		throw result.error;
	}

	const value = result.value;

	console.log(value);
}

main();
```

Checkout the [example](https://github.com/deanrih/ts-lib-algebraic-data-type/tree/main/example) folder.

## Credits/Reference

- Underlying library: [`ts-results-es`](https://github.com/lune-climate/ts-results-es)