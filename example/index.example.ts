import { Err, Ok, type Result } from "../src";

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
