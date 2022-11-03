/**
 * Returns the accrued interest for a security that pays periodic interest.
 *
 * Category: Financial
 *
 * @param {*} issue The security's issue date.
 * @param {*} first_interest The security's first interest date.
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} rate The security's annual coupon rate.
 * @param {*} par The security's par value. If you omit par, ACCRINT uses $1,000.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @param {*} calc_method Optional. Not implemented in formulajs. A logical value that specifies the way to calculate the total accrued interest when the date of settlement is later than the date of first_interest. A value of TRUE (1) returns the total accrued interest from issue to settlement. A value of FALSE (0) returns the accrued interest from first_interest to settlement. If you do not enter the argument, it defaults to TRUE.
 * @returns
 */
export function ACCRINT(issue: any, first_interest: any, settlement: any, rate: any, par: any, frequency: any, basis: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the accrued interest for a security that pays interest at maturity.
 *
 * Category: Financial
 *
 * @param {*} issue The security's issue date.
 * @param {*} settlement The security's maturity date.
 * @param {*} rate The security's annual coupon rate.
 * @param {*} par The security's par value. If you omit par, ACCRINTM uses $1,000.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function ACCRINTM(): void;
/**
 * -- Not implemented --
 *
 * Returns the depreciation for each accounting period by using a depreciation coefficient.
 *
 * Category: Financial
 *
 * @param {*} cost The cost of the asset.
 * @param {*} date_purchased The date of the purchase of the asset.
 * @param {*} first_period The date of the end of the first period.
 * @param {*} salvage The salvage value at the end of the life of the asset.
 * @param {*} period The period.
 * @param {*} rate The rate of depreciation.
 * @param {*} basis Optional. The year basis to be used.
 * @returns
 */
export function AMORDEGRC(): void;
/**
 * -- Not implemented --
 *
 * Returns the depreciation for each accounting period.
 *
 * Category: Financial
 *
 * @param {*} cost The cost of the asset.
 * @param {*} date_purchased The date of the purchase of the asset.
 * @param {*} first_period The date of the end of the first period.
 * @param {*} salvage The salvage value at the end of the life of the asset.
 * @param {*} period The period.
 * @param {*} rate The rate of depreciation.
 * @param {*} basis Optional. The year basis to be used.
 * @returns
 */
export function AMORLINC(): void;
/**
 * -- Not implemented --
 *
 * Returns the number of days from the beginning of the coupon period to the settlement date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPDAYBS(): void;
/**
 * -- Not implemented --
 *
 * Returns the number of days in the coupon period that contains the settlement date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPDAYS(): void;
/**
 * -- Not implemented --
 *
 * Returns the number of days from the settlement date to the next coupon date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPDAYSNC(): void;
/**
 * -- Not implemented --
 *
 * Returns the next coupon date after the settlement date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPNCD(): void;
/**
 * -- Not implemented --
 *
 * Returns the number of coupons payable between the settlement date and maturity date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPNUM(): void;
/**
 * -- Not implemented --
 *
 * Returns the previous coupon date before the settlement date.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function COUPPCD(): void;
/**
 * Returns the cumulative interest paid between two periods.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate.
 * @param {*} nper The total number of payment periods.
 * @param {*} pv The present value.
 * @param {*} start_period The first period in the calculation. Payment periods are numbered beginning with 1.
 * @param {*} end_period The last period in the calculation.
 * @param {*} type The timing of the payment.
 * @returns
 */
export function CUMIPMT(rate: any, nper: any, pv: any, start_period: any, end_period: any, type: any): number | Error;
/**
 * Returns the cumulative principal paid on a loan between two periods.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate.
 * @param {*} nper The total number of payment periods.
 * @param {*} pv The present value.
 * @param {*} start_period The first period in the calculation. Payment periods are numbered beginning with 1.
 * @param {*} end_period The last period in the calculation.
 * @param {*} type The timing of the payment.
 * @returns
 */
export function CUMPRINC(rate: any, nper: any, pv: any, start_period: any, end: any, type: any): number | Error;
/**
 * Returns the depreciation of an asset for a specified period by using the fixed-declining balance method.
 *
 * Category: Financial
 *
 * @param {*} cost The initial cost of the asset.
 * @param {*} salvage The value at the end of the depreciation (sometimes called the salvage value of the asset).
 * @param {*} life The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
 * @param {*} period The period for which you want to calculate the depreciation. Period must use the same units as life.
 * @param {*} month Optional. The number of months in the first year. If month is omitted, it is assumed to be 12.
 * @returns
 */
export function DB(cost: any, salvage: any, life: any, period: any, month: any): number | Error;
/**
 * Returns the depreciation of an asset for a specified period by using the double-declining balance method or some other method that you specify.
 *
 * Category: Financial
 *
 * @param {*} cost The initial cost of the asset.
 * @param {*} salvage The value at the end of the depreciation (sometimes called the salvage value of the asset). This value can be 0.
 * @param {*} life The number of periods over which the asset is being depreciated (sometimes called the useful life of the asset).
 * @param {*} period The period for which you want to calculate the depreciation. Period must use the same units as life.
 * @param {*} factor Optional. The rate at which the balance declines. If factor is omitted, it is assumed to be 2 (the double-declining balance method).
 * @returns
 */
export function DDB(cost: any, salvage: any, life: any, period: any, factor: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the discount rate for a security.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} pr The security's price per $100 face value.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function DISC(): void;
/**
 * Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.
 *
 * Category: Financial
 *
 * @param {*} fractional_dollar A number expressed as an integer part and a fraction part, separated by a decimal symbol.
 * @param {*} fraction The integer to use in the denominator of the fraction.
 * @returns
 */
export function DOLLARDE(fractional_dollar: any, fraction: any): number | Error;
/**
 * Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.
 *
 * Category: Financial
 *
 * @param {*} decimal_dollar A decimal number.
 * @param {*} fraction The integer to use in the denominator of a fraction.
 * @returns
 */
export function DOLLARFR(decimal_dollar: any, fraction: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the annual duration of a security with periodic interest payments.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} coupon The security's annual coupon rate.
 * @param {*} yld The security's annual yield.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function DURATION(): void;
/**
 * Returns the effective annual interest rate.
 *
 * Category: Financial
 *
 * @param {*} nominal_rate The nominal interest rate.
 * @param {*} npery The number of compounding periods per year.
 * @returns
 */
export function EFFECT(nominal_rate: any, npery: any): number | Error;
/**
 * Returns the future value of an investment.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate per period.
 * @param {*} nper The total number of payment periods in an annuity.
 * @param {*} pmt The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes. If pmt is omitted, you must include the pv argument.
 * @param {*} pv Optional. The present value, or the lump-sum amount that a series of future payments is worth right now. If pv is omitted, it is assumed to be 0 (zero), and you must include the pmt argument.
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 * @returns
 */
export function FV(rate: any, nper: any, payment: any, value: any, type: any): number | Error;
/**
 * Returns the future value of an initial principal after applying a series of compound interest rates.
 *
 * Category: Financial
 *
 * @param {*} principal The present value.
 * @param {*} schedule An array of interest rates to apply.
 * @returns
 */
export function FVSCHEDULE(principal: any, schedule: any): any;
/**
 * -- Not implemented --
 *
 * Returns the interest rate for a fully invested security.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} investment The amount invested in the security.
 * @param {*} redemption The amount to be received at maturity.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function INTRATE(): void;
/**
 * Returns the interest payment for an investment for a given period.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate per period.
 * @param {*} per The period for which you want to find the interest and must be in the range 1 to nper.
 * @param {*} nper The total number of payment periods in an annuity.
 * @param {*} pv The present value, or the lump-sum amount that a series of future payments is worth right now.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0).
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due. If type is omitted, it is assumed to be 0.
 * @returns
 */
export function IPMT(rate: any, per: any, nper: any, pv: any, fv: any, type: any): number | Error;
/**
 * Returns the internal rate of return for a series of cash flows.
 *
 * Category: Financial
 *
 * @param {*} values An array or a reference to values that contain numbers for which you want to calculate the internal rate of return.
 - Values must contain at least one positive value and one negative value to calculate the internal rate of return.
 - IRR uses the order of values to interpret the order of cash flows. Be sure to enter your payment and income values in the sequence you want.
 - If an array or reference argument contains text, logical values, or empty values, those values are ignored.
 * @param {*} guess Optional. A number that you guess is close to the result of IRR.
 - Microsoft Excel uses an iterative technique for calculating IRR. Starting with guess, IRR cycles through the calculation until the result is accurate within 0.00001 percent. If IRR can't find a result that works after 20 tries, the #NUM! error value is returned.
 - In most cases you do not need to provide guess for the IRR calculation. If guess is omitted, it is assumed to be 0.1 (10 percent).
 - If IRR gives the #NUM! error value, or if the result is not close to what you expected, try again with a different value for guess.
 * @returns
 */
export function IRR(values: any, guess: any): any;
/**
 * Calculates the interest paid during a specific period of an investment.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate for the investment.
 * @param {*} per The period for which you want to find the interest, and must be between 1 and Nper.
 * @param {*} nper The total number of payment periods for the investment.
 * @param {*} pv The present value of the investment. For a loan, Pv is the loan amount.
 *
 * @returns
 */
export function ISPMT(rate: any, per: any, nper: any, pv: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the Macauley modified duration for a security with an assumed par value of $100.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} coupon The security's annual coupon rate.
 * @param {*} yld The security's annual yield.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function MDURATION(): void;
/**
 * Returns the internal rate of return where positive and negative cash flows are financed at different rates.
 *
 * Category: Financial
 *
 * @param {*} values An array or a reference to values that contain numbers. These numbers represent a series of payments (negative values) and income (positive values) occurring at regular periods.
 - Values must contain at least one positive value and one negative value to calculate the modified internal rate of return. Otherwise, MIRR returns the #DIV/0! error value.
 - If an array or reference argument contains text, logical values, or empty values, those values are ignored; however, values with the value zero are included.
 * @param {*} finance_rate The interest rate you pay on the money used in the cash flows.
 * @param {*} reinvest_rate The interest rate you receive on the cash flows as you reinvest them.
 * @returns
 */
export function MIRR(values: any, finance_rate: any, reinvest_rate: any): number | Error;
/**
 * Returns the annual nominal interest rate.
 *
 * Category: Financial
 *
 * @param {*} effect_rate The effective interest rate.
 * @param {*} npery The number of compounding periods per year.
 * @returns
 */
export function NOMINAL(effect_rate: any, npery: any): number | Error;
/**
 * Returns the number of periods for an investment.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate per period.
 * @param {*} pmt The payment made each period; it cannot change over the life of the annuity. Typically, pmt contains principal and interest but no other fees or taxes.
 * @param {*} pv The present value, or the lump-sum amount that a series of future payments is worth right now.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0).
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due.
 * @returns
 */
export function NPER(rate: any, pmt: any, pv: any, fv: any, type: any): number | Error;
/**
 * Returns the net present value of an investment based on a series of periodic cash flows and a discount rate.
 *
 * Category: Financial
 *
 * @param {*} rate The rate of discount over the length of one period.
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 254 arguments representing the payments and income.
 - value1, value2, ... must be equally spaced in time and occur at the end of each period.
 - NPV uses the order of value1, value2, ... to interpret the order of cash flows. Be sure to enter your payment and income values in the correct sequence.
 - Arguments that are empty values, logical values, or text representations of numbers, error values, or text that cannot be translated into numbers are ignored.
 - If an argument is an array or reference, only numbers in that array or reference are counted. Empty values, logical values, text, or error values in the array or reference are ignored.
 * @returns
 */
export function NPV(...args: any[]): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the price per $100 face value of a security with an odd first period.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} issue The security's issue date.
 * @param {*} first_coupon The security's first coupon date.
 * @param {*} rate The security's interest rate.
 * @param {*} yld The security's annual yield.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function ODDFPRICE(): void;
/**
 * -- Not implemented --
 *
 * Returns the yield of a security with an odd first period.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} issue The security's issue date.
 * @param {*} first_coupon The security's first coupon date.
 * @param {*} rate The security's interest rate.
 * @param {*} pr The security's price.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function ODDFYIELD(): void;
/**
 * -- Not implemented --
 *
 * Returns the price per $100 face value of a security with an odd last period.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} last_interest The security's last coupon date.
 * @param {*} rate The security's interest rate.
 * @param {*} yld The security's annual yield.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function ODDLPRICE(): void;
/**
 * -- Not implemented --
 *
 * Returns the yield of a security with an odd last period.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} last_interest The security's last coupon date.
 * @param {*} rate The security's interest rate
 * @param {*} pr The security's price.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function ODDLYIELD(): void;
/**
 * Returns the number of periods required by an investment to reach a specified value.
 *
 * Category: Financial
 *
 * @param {*} rate Rate is the interest rate per period.
 * @param {*} pv Pv is the present value of the investment.
 * @param {*} fv Fv is the desired future value of the investment.
 * @returns
 */
export function PDURATION(rate: any, pv: any, fv: any): number | Error;
/**
 * Returns the periodic payment for an annuity.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate for the loan.
 * @param {*} nper The total number of payments for the loan.
 * @param {*} pv The present value, or the total amount that a series of future payments is worth now; also known as the principal.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {*} type Optional. The number 0 (zero) or 1 and indicates when payments are due.
 * @returns
 */
export function PMT(rate: any, nper: any, pv: any, fv: any, type: any): number | Error;
/**
 * Returns the payment on the principal for an investment for a given period.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate per period.
 * @param {*} per Specifies the period and must be in the range 1 to nper.
 * @param {*} nper The total number of payment periods in an annuity.
 * @param {*} pv The present value — the total amount that a series of future payments is worth now.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due.
 * @returns
 */
export function PPMT(rate: any, per: any, nper: any, pv: any, fv: any, type: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the price per $100 face value of a security that pays periodic interest.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} rate The security's annual coupon rate.
 * @param {*} yld The security's annual yield.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function PRICE(): void;
/**
 * -- Not implemented --
 *
 * Returns the price per $100 face value of a discounted security.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} discount The security's discount rate.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function PRICEDISC(): void;
/**
 * -- Not implemented --
 *
 * Returns the price per $100 face value of a security that pays interest at maturity.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} issue The security's issue date, expressed as a serial date number.
 * @param {*} rate The security's interest rate at date of issue.
 * @param {*} yld The security's annual yield.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function PRICEMAT(): void;
/**
 * Returns the present value of an investment.
 *
 * Category: Financial
 *
 * @param {*} rate The interest rate per period. For example, if you obtain an automobile loan at a 10 percent annual interest rate and make monthly payments, your interest rate per month is 10%/12, or 0.83%. You would enter 10%/12, or 0.83%, or 0.0083, into the formula as the rate.
 * @param {*} nper The total number of payment periods in an annuity. For example, if you get a four-year car loan and make monthly payments, your loan has 4*12 (or 48) periods. You would enter 48 into the formula for nper.
 * @param {*} pmt The payment made each period and cannot change over the life of the annuity. Typically, pmt includes principal and interest but no other fees or taxes. For example, the monthly payments on a $10,000, four-year car loan at 12 percent are $263.33. You would enter -263.33 into the formula as the pmt. If pmt is omitted, you must include the fv argument.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0). For example, if you want to save $50,000 to pay for a special project in 18 years, then $50,000 is the future value. You could then make a conservative guess at an interest rate and determine how much you must save each month. If fv is omitted, you must include the pmt argument.
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due.
 * @returns
 */
export function PV(rate: any, per: any, pmt: any, fv: any, type: any): number | Error;
/**
 * Returns the interest rate per period of an annuity.
 *
 * Category: Financial
 *
 * @param {*} nper The total number of payment periods in an annuity.
 * @param {*} pmt The payment made each period and cannot change over the life of the annuity. Typically, pmt includes principal and interest but no other fees or taxes. If pmt is omitted, you must include the fv argument.
 * @param {*} pv The present value — the total amount that a series of future payments is worth now.
 * @param {*} fv Optional. The future value, or a cash balance you want to attain after the last payment is made. If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0). If fv is omitted, you must include the pmt argument.
 * @param {*} type Optional. The number 0 or 1 and indicates when payments are due.
 * @param {*} guess Optional. Your guess for what the rate will be. If you omit guess, it is assumed to be 10 percent. If RATE does not converge, try different values for guess. RATE usually converges if guess is between 0 and 1.
 - If you omit guess, it is assumed to be 10 percent.
 - If RATE does not converge, try different values for guess. RATE usually converges if guess is between 0 and 1.
 * @returns
 */
export function RATE(nper: any, pmt: any, pv: any, fv: any, type: any, guess: any): any;
/**
 * -- Not implemented --
 *
 * Returns the amount received at maturity for a fully invested security.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} investment The amount invested in the security.
 * @param {*} discount The security's discount rate.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function RECEIVED(): void;
/**
 * Returns an equivalent interest rate for the growth of an investment.
 *
 * Category: Financial
 *
 * @param {*} nper Nper is the number of periods for the investment.
 * @param {*} pv Pv is the present value of the investment.
 * @param {*} fv Fv is the future value of the investment.
 * @returns
 */
export function RRI(nper: any, pv: any, fv: any): number | Error;
/**
 * Returns the straight-line depreciation of an asset for one period.
 *
 * Category: Financial
 *
 * @param {*} cost The initial cost of the asset.
 * @param {*} salvage The value at the end of the depreciation (sometimes called the salvage value of the asset).
 * @param {*} life The number of periods over which the asset is depreciated (sometimes called the useful life of the asset).
 * @returns
 */
export function SLN(cost: any, salvage: any, life: any): number | Error;
/**
 * Returns the sum-of-years' digits depreciation of an asset for a specified period.
 *
 * Category: Financial
 *
 * @param {*} cost The initial cost of the asset.
 * @param {*} salvage The value at the end of the depreciation (sometimes called the salvage value of the asset).
 * @param {*} life The number of periods over which the asset is depreciated (sometimes called the useful life of the asset).
 * @param {*} per The period and must use the same units as life.
 * @returns
 */
export function SYD(cost: any, salvage: any, life: any, per: any): number | Error;
/**
 * Returns the bond-equivalent yield for a Treasury bill.
 *
 * Category: Financial
 *
 * @param {*} settlement The Treasury bill's settlement date. The security settlement date is the date after the issue date when the Treasury bill is traded to the buyer.
 * @param {*} maturity The Treasury bill's maturity date. The maturity date is the date when the Treasury bill expires.
 * @param {*} discount The Treasury bill's discount rate.
 * @returns
 */
export function TBILLEQ(settlement: any, maturity: any, discount: any): number | Error;
/**
 * Returns the price per $100 face value for a Treasury bill.
 *
 * Category: Financial
 *
 * @param {*} settlement The Treasury bill's settlement date. The security settlement date is the date after the issue date when the Treasury bill is traded to the buyer.
 * @param {*} maturity The Treasury bill's maturity date. The maturity date is the date when the Treasury bill expires.
 * @param {*} discount The Treasury bill's discount rate.
 * @returns
 */
export function TBILLPRICE(settlement: any, maturity: any, discount: any): number | Error;
/**
 * Returns the yield for a Treasury bill.
 *
 * Category: Financial
 *
 * @param {*} settlement The Treasury bill's settlement date. The security settlement date is the date after the issue date when the Treasury bill is traded to the buyer.
 * @param {*} maturity The Treasury bill's maturity date. The maturity date is the date when the Treasury bill expires.
 * @param {*} pr The Treasury bill's price per $100 face value.
 * @returns
 */
export function TBILLYIELD(settlement: any, maturity: any, pr: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the depreciation of an asset for a specified or partial period by using a declining balance method.
 *
 * Category: Financial
 *
 * @param {*} cost The initial cost of the asset.
 * @param {*} salvage The value at the end of the depreciation (sometimes called the salvage value of the asset). This value can be 0.
 * @param {*} life The number of periods over which the asset is depreciated (sometimes called the useful life of the asset).
 * @param {*} start_period The starting period for which you want to calculate the depreciation. Start_period must use the same units as life.
 * @param {*} end_period The ending period for which you want to calculate the depreciation. End_period must use the same units as life.
 * @param {*} factor Optional. The rate at which the balance declines. If factor is omitted, it is assumed to be 2 (the double-declining balance method). Change factor if you do not want to use the double-declining balance method. For a description of the double-declining balance method, see DDB.
 * @param {*} no_switch Optional. A logical value specifying whether to switch to straight-line depreciation when depreciation is greater than the declining balance calculation.
 - If no_switch is TRUE, Microsoft Excel does not switch to straight-line depreciation even when the depreciation is greater than the declining balance calculation.
 - If no_switch is FALSE or omitted, Excel switches to straight-line depreciation when depreciation is greater than the declining balance calculation.
 * @returns
 */
export function VDB(): void;
/**
 * Returns the internal rate of return for a schedule of cash flows that is not necessarily periodic.
 *
 * Category: Financial
 *
 * @param {*} values A series of cash flows that corresponds to a schedule of payments in dates. The first payment is optional and corresponds to a cost or payment that occurs at the beginning of the investment. If the first value is a cost or payment, it must be a negative value. All succeeding payments are discounted based on a 365-day year. The series of values must contain at least one positive and one negative value.
 * @param {*} dates A schedule of payment dates that corresponds to the cash flow payments. Dates may occur in any order. Dates should be entered by using the DATE function, or as results of other formulas or functions. For example, use DATE(2008,5,23) for the 23rd day of May, 2008. Problems can occur if dates are entered as text. .
 * @param {*} guess Optional. A number that you guess is close to the result of XIRR.
 * @returns
 */
export function XIRR(values: any, dates: any, guess: any): any;
/**
 * Returns the net present value for a schedule of cash flows that is not necessarily periodic.
 *
 * Category: Financial
 *
 * @param {*} rate The discount rate to apply to the cash flows.
 * @param {*} values A series of cash flows that corresponds to a schedule of payments in dates. The first payment is optional and corresponds to a cost or payment that occurs at the beginning of the investment. If the first value is a cost or payment, it must be a negative value. All succeeding payments are discounted based on a 365-day year. The series of values must contain at least one positive value and one negative value.
 * @param {*} dates A schedule of payment dates that corresponds to the cash flow payments. The first payment date indicates the beginning of the schedule of payments. All other dates must be later than this date, but they may occur in any order.
 * @returns
 */
export function XNPV(rate: any, values: any, dates: any): number | Error;
/**
 * -- Not implemented --
 *
 * Returns the yield on a security that pays periodic interest.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} rate The security's annual coupon rate.
 * @param {*} pr The security's price per $100 face value.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} frequency The number of coupon payments per year. For annual payments, frequency = 1; for semiannual, frequency = 2; for quarterly, frequency = 4.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function YIELD(): void;
/**
 * -- Not implemented --
 *
 * Returns the annual yield for a discounted security; for example, a Treasury bill.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} pr The security's price per $100 face value.
 * @param {*} redemption The security's redemption value per $100 face value.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function YIELDDISC(): void;
/**
 * -- Not implemented --
 *
 * Returns the annual yield of a security that pays interest at maturity.
 *
 * Category: Financial
 *
 * @param {*} settlement The security's settlement date. The security settlement date is the date after the issue date when the security is traded to the buyer.
 * @param {*} maturity The security's maturity date. The maturity date is the date when the security expires.
 * @param {*} issue The security's issue date, expressed as a serial date number.
 * @param {*} rate The security's interest rate at date of issue.
 * @param {*} pr The security's price per $100 face value.
 * @param {*} basis Optional. The type of day count basis to use.
 * @returns
 */
export function YIELDMAT(): void;
