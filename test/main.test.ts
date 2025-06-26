import { describe, expect, it } from "bun:test";

import { Err, Ok, type Result } from "../src";

const error = new Error("Error");

function resultReturnOk(): Result {
	return Ok();
}

function resultReturnErr(): Result {
	return Err(error);
}

function resultReturnOkNumber(): Result<number> {
	return Ok(100);
}
function resultReturnOkString(): Result<string> {
	return Ok("hello world");
}

// function resultReturnErr(): Result {
// 	return Err(error);
// }

describe("Test Result", () => {
	it("ResultOk.isOk() is true", () => {
		expect(resultReturnOk().isOk()).toBe(true);
	});
	it("ResultOk.isErr() is false ", () => {
		expect(resultReturnOk().isErr()).toBe(false);
	});
	it("ResultOk.isOk() is a number", () => {
		const result = resultReturnOkNumber();
		const value = result.isOk() ? result.value : undefined;

		expect(value).toBeNumber();
	});
	it("ResultOk.isOk() is a number value", () => {
		const result = resultReturnOkNumber();
		const value = result.isOk() ? result.value : undefined;

		expect(value).toBe(100);
	});
	it("ResultOk.isOk() is a string", () => {
		const result = resultReturnOkString();
		const value = result.isOk() ? result.value : undefined;

		expect(value).toBeString();
	});
	it("ResultOk.isOk() is a string value", () => {
		const result = resultReturnOkString();
		const value = result.isOk() ? result.value : undefined;

		expect(value).toBe("hello world");
	});
	it("ResultErr.isOk() is false", () => {
		expect(resultReturnErr().isOk()).toBe(false);
	});
	it("ResultErr.isErr() is true", () => {
		expect(resultReturnErr().isErr()).toBe(true);
	});
	it("ResultErr.isErr() is an error", () => {
		const result = resultReturnErr();
		const value = result.isErr() ? result.error : undefined;
		expect(value).toBeInstanceOf(Error);
	});
});
