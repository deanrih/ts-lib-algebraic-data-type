/*!
 * Copyright (c) 2024 Dean Rikrik Ichsan Hakiki.
 * All rights reserved.
 *
 * This code is licensed under the MIT License.
 *
 * Author: Dean Rikrik Ichsan Hakiki (deanrih)
 * Version: 1.0.0
 */

import type {
	None,
	Option,
	Some,
	Err as tsErr,
	Ok as tsOk,
	Result as tsResult,
} from "ts-results-es";
import { ErrImpl, OkImpl } from "ts-results-es";

type Result<T = None, E = Error> = tsResult<T, E>;
type ResultAsync<T = None, E = Error> = Promise<Result<T, E>>;
type ResultOption<T, E = Error> = tsResult<Option<T>, E>;
type ResultOptionAsync<T, E = Error> = Promise<ResultOption<T, E>>;

type OptionAsync<T> = Promise<Option<T>>;

type Err<T> = tsErr<T>;

const Ok = OkImpl as typeof OkImpl & (<T = None>(val?: T) => tsOk<T>);
const OkNone = OkImpl as typeof OkImpl & (<T = None>() => tsOk<T>);
const OkSome = OkImpl as typeof OkImpl & (<T>(val?: T) => tsOk<Some<T>>);

const Err = ErrImpl as typeof ErrImpl & (<E>(err: E) => tsErr<E>);

export {
	Ok,
	OkNone,
	OkSome,
	Err,
	type Result,
	type ResultAsync,
	type ResultOption,
	type ResultOptionAsync,
	type OptionAsync,
};
