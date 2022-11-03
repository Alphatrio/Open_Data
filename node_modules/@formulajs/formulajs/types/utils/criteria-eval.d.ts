/**
 * Create token which describe passed symbol/value.
 *
 * @param {String} value Value/Symbol to describe.
 * @param {String} type Type of the token 'operator' or 'literal'.
 * @return {Object}
 */
export function createToken(value: string, type: string): any;
export function parse(expression: any): any[];
export const TOKEN_TYPE_OPERATOR: "operator";
export const TOKEN_TYPE_LITERAL: "literal";
/**
 * Compute/Evaluate an expression passed as an array of tokens.
 *
 * @param {Object[]} tokens
 * @return {Boolean}
 */
export function compute(tokens: any[]): boolean;
