/**
 * Returns TRUE if all of its arguments are TRUE.
 *
 * Category: Logical
 *
 * @returns
 */
export function AND(...args: any[]): any;
/**
 * Returns the logical value FALSE.
 *
 * Category: Logical
 *
 * @returns
 */
export function FALSE(): boolean;
/**
 * Specifies a logical test to perform.
 *
 * Category: Logical
 *
 * @param {*} logical_test
 * @param {*} value_if_true
 * @param {*} value_if_false
 *
 * @returns
 */
export function IF(logical_test: any, value_if_true: any, value_if_false: any, ...args: any[]): any;
/**
 * Checks whether one or more conditions are met and returns a value that corresponds to the first TRUE condition.
 *
 * Category: Logical
 *
 * @returns
 */
export function IFS(...args: any[]): any;
/**
 * Returns a value you specify if a formula evaluates to an error; otherwise, returns the result of the formula.
 *
 * Category: Logical
 *
 * @param {*} value The argument that is checked for an error.
 * @param {*} value_if_error The value to return if the formula evaluates to an error. The following error types are evaluated: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!.
 * @returns
 */
export function IFERROR(value: any, value_if_error: any): any;
/**
 * Returns the value you specify if the expression resolves to #N/A, otherwise returns the result of the expression.
 *
 * Category: Logical
 *
 * @returns
 */
export function IFNA(value: any, value_if_na: any): any;
/**
 * Reverses the logic of its argument.
 *
 * Category: Logical
 *
 * @returns
 */
export function NOT(logical: any): boolean | Error;
/**
 * Returns TRUE if any argument is TRUE.
 *
 * Category: Logical
 *
 * @returns
 */
export function OR(...args: any[]): any;
/**
 * Returns the logical value TRUE.
 *
 * Category: Logical
 *
 * @returns
 */
export function TRUE(): boolean;
/**
 * Returns a logical exclusive OR of all arguments.
 *
 * Category: Logical
 *
 * @param {*} args logical1, logical2,… Logical 1 is required, subsequent logical values are optional. 1 to 254 conditions you want to test that can be either TRUE or FALSE, and can be logical values, arrays, or references.
 * @returns
 */
export function XOR(...args: any[]): any;
/**
 * Evaluates an expression against a list of values and returns the result corresponding to the first matching value. If there is no match, an optional default value may be returned.
 *
 * Category: Logical
 *
 * @returns
 */
export function SWITCH(...args: any[]): any;
