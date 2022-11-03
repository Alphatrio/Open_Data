/**
 * Returns the average of the absolute deviations of data points from their mean.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want the average of the absolute deviations. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function AVEDEV(...args: any[]): number | Error;
/**
 * Returns the average of its arguments.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ...Numbers, value references or ranges for which you want the average.
 * @returns
 */
export function AVERAGE(...args: any[]): any;
/**
 * Returns the average of its arguments, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 values, ranges of values, or values for which you want the average.
 * @returns
 */
export function AVERAGEA(...args: any[]): any;
/**
 * Returns the average (arithmetic mean) of all the values in a range that meet a given criteria.
 *
 * Category: Statistical
 *
 * @param {*} range One or more values to average, including numbers or names, arrays, or references that contain numbers.
 * @param {*} criteria The criteria in the form of a number, expression, value reference, or text that defines which values are averaged.
 * @param {*} average_range Optional. The actual set of values to average. If omitted, range is used.
 * @returns
 */
export function AVERAGEIF(range: any, criteria: any, average_range: any, ...args: any[]): number | Error;
/**
 * Returns the average (arithmetic mean) of all values that meet multiple criteria.
 *
 * Category: Statistical
 *
 * @param {*} args One or more values to average, including numbers or names, arrays, or references that contain numbers.
 * @returns
 */
export function AVERAGEIFS(...args: any[]): number;
/**
 * Returns the correlation coefficient between two data sets.
 *
 * Category: Statistical
 *
 * @param {*} array1 A range of value values.
 * @param {*} array2 A second range of value values.
 * @returns
 */
export function CORREL(array1: any, array2: any): any;
/**
 * Counts how many numbers are in the list of arguments.
 *
 * Category: Statistical
 *
 * @param {*} args Cell reference, or range within which you want to count numbers.count numbers.
 * @returns
 */
export function COUNT(...args: any[]): any;
/**
 * Counts how many values are in the list of arguments.
 *
 * Category: Statistical
 *
 * @param {*} args Arguments representing the values that you want to count.
 * @returns
 */
export function COUNTA(...args: any[]): number;
/**
 * Formula.js only
 *
 * @param {*} range
 * @param {*} value
 * @returns
 */
export function COUNTIN(range: any, value: any): number;
/**
 * Counts the number of blank values within a range.
 *
 * Category: Statistical
 *
 * @param {*} args The range from which you want to count the blank values.
 * @returns
 */
export function COUNTBLANK(...args: any[]): number;
/**
 * Counts the number of values within a range that meet the given criteria.
 *
 * Category: Statistical
 *
 * @returns
 */
export function COUNTIF(range: any, criteria: any): any;
/**
 * Counts the number of values within a range that meet multiple criteria.
 *
 * Category: Statistical
 *
 * @param {*} args Range in which to evaluate the associated criteria.
 * @returns
 */
export function COUNTIFS(...args: any[]): number;
/**
 * Formula.js only
 *
 * @returns
 */
export function COUNTUNIQUE(...args: any[]): any;
/**
 * Returns the sum of squares of deviations.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want to calculate the sum of squared deviations. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function DEVSQ(...args: any[]): number | Error;
/**
 * Returns the Fisher transformation.
 *
 * Category: Statistical
 *
 * @param {*} x A numeric value for which you want the transformation.
 * @returns
 */
export function FISHER(x: any): number | Error;
/**
 * Returns the inverse of the Fisher transformation.
 *
 * Category: Statistical
 *
 * @param {*} y The value for which you want to perform the inverse of the transformation.
 * @returns
 */
export function FISHERINV(y: any): number | Error;
/**
 * Returns a value along a linear trend.
 *
 * Category: Statistical
 *
 * @param {*} x The data point for which you want to predict a value.
 * @param {*} known_ys The dependent array or range of data.
 * @param {*} known_xs The independent array or range of data.
 * @returns
 */
export function FORECAST(x: any, known_ys: any, known_xs: any): number | Error;
/**
 * Returns a frequency distribution as a vertical array.
 *
 * Category: Statistical
 *
 * @param {*} data_array An array of or reference to a set of values for which you want to count frequencies. If data_array contains no values, FREQUENCY returns an array of zeros.
 * @param {*} bins_array An array of or reference to intervals into which you want to group the values in data_array. If bins_array contains no values, FREQUENCY returns the number of elements in data_array.
 * @returns
 */
export function FREQUENCY(data_array: any, bins_array: any): number[] | Error;
/**
 * Returns the Gamma function value.
 *
 * Category: Statistical
 *
 * @param {*} number Returns a number.
 * @returns
 */
export function GAMMA(number: any): any;
export namespace GAMMA {
    /**
     * Returns the gamma distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value at which you want to evaluate the distribution.
     * @param {*} alpha A parameter to the distribution.
     * @param {*} beta A parameter to the distribution. If beta = 1, GAMMA.DIST returns the standard gamma distribution.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, GAMMA.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(value: any, alpha: any, beta: any, cumulative: any, ...args: any[]): any;
    /**
     * Returns the inverse of the gamma cumulative distribution.
     *
     * Category: Statistical
     *
     * @param {*} probability The probability associated with the gamma distribution.
     * @param {*} alpha A parameter to the distribution.
     * @param {*} beta A parameter to the distribution. If beta = 1, GAMMA.INV returns the standard gamma distribution.
     * @returns
     */
    function INV(probability: any, alpha: any, beta: any, ...args: any[]): any;
}
/**
 * Returns the natural logarithm of the gamma function, Γ(x).
 *
 * Category: Statistical
 *
 * @param {*} x The value for which you want to calculate GAMMALN.
 * @returns
 */
export function GAMMALN(x: any): any;
export namespace GAMMALN {
    /**
     * Returns the natural logarithm of the gamma function, Γ(x).
     *
     * Category: Statistical
     *
     * @param {*} x The value for which you want to calculate GAMMALN.PRECISE.
     * @returns
     */
    function PRECISE(x: any, ...args: any[]): any;
}
/**
 * Returns 0.5 less than the standard normal cumulative distribution.
 *
 * Category: Statistical
 *
 * @param {*} z Returns a number.
 * @returns
 */
export function GAUSS(z: any): number | Error;
/**
 * Returns the geometric mean.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want to calculate the mean. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function GEOMEAN(...args: any[]): any;
/**
 * Returns values along an exponential trend.
 *
 * Category: Statistical
 *
 * @param {*} known_y The set of y-values you already know in the relationship y = b*m^x.
 - If the array known_y's is in a single column, then each column of known_x's is interpreted as a separate variable.
 - If the array known_y's is in a single row, then each row of known_x's is interpreted as a separate variable.
 - If any of the numbers in known_y's is 0 or negative, GROWTH returns the #NUM! error value.
 * @param {*} known_x Optional. An optional set of x-values that you may already know in the relationship y = b*m^x.
 - The array known_x's can include one or more sets of variables. If only one variable is used, known_y's and known_x's can be ranges of any shape, as long as they have equal dimensions. If more than one variable is used, known_y's must be a vector (that is, a range with a height of one row or a width of one column).
 - If known_x's is omitted, it is assumed to be the array {1,2,3,...} that is the same size as known_y's.
 * @param {*} new_x Optional. Are new x-values for which you want GROWTH to return corresponding y-values.
 - new_x's must include a column (or row) for each independent variable, just as known_x's does. So, if known_y's is in a single column, known_x's and new_x's must have the same number of columns. If known_y's is in a single row, known_x's and new_x's must have the same number of rows.
 - If new_x's is omitted, it is assumed to be the same as known_x's.
 - If both known_x's and new_x's are omitted, they are assumed to be the array {1,2,3,...} that is the same size as known_y's.
 * @param {*} use_const Optional. A logical value specifying whether to force the constant b to equal 1. If const is TRUE or omitted, b is calculated normally. If const is FALSE, b is set equal to 1 and the m-values are adjusted so that y = m^x.
 - If const is TRUE or omitted, b is calculated normally.
 - If const is FALSE, b is set equal to 1 and the m-values are adjusted so that y = m^x.
 * @returns
 */
export function GROWTH(known_y: any, known_x: any, new_x: any, use_const: any): number[] | Error;
/**
 * Returns the harmonic mean.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want to calculate the mean. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function HARMEAN(...args: any[]): number | Error;
/**
 * Returns the intercept of the linear regression line.
 *
 * Category: Statistical
 *
 * @param {*} known_y The dependent set of observations or data.
 * @param {*} known_x The independent set of observations or data.
 * @returns
 */
export function INTERCEPT(known_y: any, known_x: any): number | Error;
/**
 * Returns the kurtosis of a data set.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want to calculate kurtosis. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function KURT(...args: any[]): number | Error;
/**
 * Returns the k-th largest value in a data set.
 *
 * Category: Statistical
 *
 * @param {*} array The array or range of data for which you want to determine the k-th largest value.
 * @param {*} k The position (from the largest) in the array or value range of data to return.
 * @returns
 */
export function LARGE(array: any, k: any): any;
/**
 * Returns the parameters of a linear trend.
 *
 * Category: Statistical
 *
 * @param {*} known_y The set of y-values that you already know in the relationship y = mx + b.
 - If the range of known_y's is in a single column, each column of known_x's is interpreted as a separate variable.
 - If the range of known_y's is contained in a single row, each row of known_x's is interpreted as a separate variable.
 * @param {*} known_x Optional. A set of x-values that you may already know in the relationship y = mx + b.
 - The range of known_x's can include one or more sets of variables. If only one variable is used, known_y's and known_x's can be ranges of any shape, as long as they have equal dimensions. If more than one variable is used, known_y's must be a vector (that is, a range with a height of one row or a width of one column).
 - If known_x's is omitted, it is assumed to be the array {1,2,3,...} that is the same size as known_y's.
 * @returns
 */
export function LINEST(known_y: any, known_x: any): number[] | Error;
/**
 * Returns the parameters of an exponential trend.
 *
 * Category: Statistical
 *
 * @param {*} known_y The set of y-values you already know in the relationship y = b*m^x.
 - If the array known_y's is in a single column, then each column of known_x's is interpreted as a separate variable.
 - If the array known_y's is in a single row, then each row of known_x's is interpreted as a separate variable.
 * @param {*} known_x Optional. An optional set of x-values that you may already know in the relationship y = b*m^x.
 - The array known_x's can include one or more sets of variables. If only one variable is used, known_y's and known_x's can be ranges of any shape, as long as they have equal dimensions. If more than one variable is used, known_y's must be a range of values with a height of one row or a width of one column (which is also known as a vector).
 - If known_x's is omitted, it is assumed to be the array {1,2,3,...} that is the same size as known_y's.
 * @returns
 */
export function LOGEST(known_y: any, known_x: any): number[] | Error;
/**
 * Returns the maximum value in a list of arguments.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 numbers for which you want to find the maximum value.
 * @returns
 */
export function MAX(...args: any[]): any;
/**
 * Returns the maximum value in a list of arguments, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2,... Number arguments 2 to 255 for which you want to find the largest value.
 * @returns
 */
export function MAXA(...args: any[]): any;
/**
 * Returns the median of the given numbers.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 numbers for which you want the median.
 * @returns
 */
export function MEDIAN(...args: any[]): any;
/**
 * Returns the minimum value in a list of arguments.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is optional, subsequent numbers are optional. 1 to 255 numbers for which you want to find the minimum value.
 * @returns
 */
export function MIN(...args: any[]): any;
/**
 * Returns the smallest value in a list of arguments, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 values for which you want to find the smallest value.
 * @returns
 */
export function MINA(...args: any[]): any;
/**
 * Returns the Pearson product moment correlation coefficient.
 *
 * Category: Statistical
 *
 * @param {*} array1 A set of independent values.
 * @param {*} array2 A set of dependent values.
 * @returns
 */
export function PEARSON(array1: any, array2: any): number | Error;
/**
 * Returns the number of permutations for a given number of objects.
 *
 * Category: Statistical
 *
 * @param {*} number An integer that describes the number of objects.
 * @param {*} number_chosen An integer that describes the number of objects in each permutation.
 * @returns
 */
export function PERMUT(number: any, number_chosen: any): number | Error;
/**
 * Returns the number of permutations for a given number of objects (with repetitions) that can be selected from the total objects.
 *
 * Category: Statistical
 *
 * @param {*} number An integer that describes the total number of objects.
 * @param {*} number_chosen An integer that describes the number of objects in each permutation.
 * @returns
 */
export function PERMUTATIONA(number: any, number_chosen: any): number | Error;
/**
 * Returns the value of the density function for a standard normal distribution.
 *
 * Category: Statistical
 *
 * @param {*} x X is the number for which you want the density of the standard normal distribution.
 * @returns
 */
export function PHI(x: any): number | Error;
/**
 * Returns the probability that values in a range are between two limits.
 *
 * Category: Statistical
 *
 * @param {*} x_range The range of numeric values of x with which there are associated probabilities.
 * @param {*} prob_range A set of probabilities associated with values in x_range.
 * @param {*} lower_limit Optional. The lower bound on the value for which you want a probability.
 * @param {*} upper_limit Optional. The optional upper bound on the value for which you want a probability.
 * @returns
 */
export function PROB(x_range: any, prob_range: any, lower_limit: any, upper_limit: any): any;
/**
 * Returns the row number of a reference.
 *
 * Category: Lookup and reference
 *
 * @param {*} reference the value or range of values for which you want the row number.
 * @param {*} index
 * @returns
 */
export function ROW(reference: any, index: any, ...args: any[]): any;
/**
 * Returns the square of the Pearson product moment correlation coefficient.
 *
 * Category: Statistical
 *
 * @param {*} known_y An array or range of data points.
 * @param {*} known_x An array or range of data points.
 * @returns
 */
export function RSQ(known_y: any, known_x: any): number | Error;
/**
 * Returns the skewness of a distribution.
 *
 * Category: Statistical
 *
 * @param {*} args number1, number2, ... Number1 is required, subsequent numbers are optional. 1 to 255 arguments for which you want to calculate skewness. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function SKEW(...args: any[]): number | Error;
export namespace SKEW {
    /**
     * Returns the skewness of a distribution based on a population.
     *
     * Category: Statistical
     *
     * @returns
     */
    function P(...args: any[]): number | Error;
}
/**
 * Returns the slope of the linear regression line.
 *
 * Category: Statistical
 *
 * @param {*} known_y An array or value range of numeric dependent data points.
 * @param {*} known_x The set of independent data points.
 * @returns
 */
export function SLOPE(known_y: any, known_x: any): number | Error;
/**
 * Returns the k-th smallest value in a data set.
 *
 * Category: Statistical
 *
 * @param {*} array An array or range of numerical data for which you want to determine the k-th smallest value.
 * @param {*} k The position (from the smallest) in the array or range of data to return.
 * @returns
 */
export function SMALL(array: any, k: any): any;
/**
 * Returns a normalized value.
 *
 * Category: Statistical
 *
 * @param {*} x The value you want to normalize.
 * @param {*} mean The arithmetic mean of the distribution.
 * @param {*} standard_dev The standard deviation of the distribution.
 * @returns
 */
export function STANDARDIZE(x: any, mean: any, standard_dev: any): number | Error;
/**
 * Estimates standard deviation based on a sample, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 values corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function STDEVA(...args: any[]): number;
/**
 * Calculates standard deviation based on the entire population, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 values corresponding to a population. You can also use a single array or a reference to an array instead of arguments separated by commas.
 * @returns
 */
export function STDEVPA(...args: any[]): number;
/**
 * Returns the standard error of the predicted y-value for each x in the regression.
 *
 * Category: Statistical
 *
 * @param {*} known_y An array or range of dependent data points.
 * @param {*} known_x An array or range of independent data points.
 * @returns
 */
export function STEYX(known_y: any, known_x: any): number | Error;
/**
 * Returns values along a linear trend.
 *
 * Category: Statistical
 *
 * @param {*} known_ys The set of y-values you already know in the relationship y = mx + b
 * @param {*} known_xs An optional set of x-values that you may already know in the relationship y = mx + b
 * @param {*} new_xs Optional. New x-values for which you want TREND to return corresponding y-values.
 * @returns
 */
export function TREND(known_ys: any, known_xs: any, new_xs: any): any[] | Error;
/**
 * Returns the mean of the interior of a data set.
 *
 * Category: Statistical
 *
 * @param {*} array The array or range of values to trim and average.
 * @param {*} percent The fractional number of data points to exclude from the calculation. For example, if percent = 0.2, 4 points are trimmed from a data set of 20 points (20 x 0.2): 2 from the top and 2 from the bottom of the set.
 * @returns
 */
export function TRIMMEAN(range: any, percent: any): any;
/**
 * Estimates variance based on a sample, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 value arguments corresponding to a sample of a population.
 * @returns
 */
export function VARA(...args: any[]): number;
/**
 * Calculates variance based on the entire population, including numbers, text, and logical values.
 *
 * Category: Statistical
 *
 * @param {*} args value1, value2, ... Value1 is required, subsequent values are optional. 1 to 255 value arguments corresponding to a population.
 * @returns
 */
export function VARPA(...args: any[]): number | Error;
export namespace BETA {
    /**
     * Returns the beta cumulative distribution function.
     *
     * Category: Statistical
     *
     * @param {*} x The value between A and B at which to evaluate the function
     * @param {*} alpha A parameter of the distribution.
     * @param {*} beta A parameter of the distribution.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, BETA.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @param {*} a Optional. A lower bound to the interval of x.
     * @param {*} b Optional. An upper bound to the interval of x.
     * @returns
     */
    function DIST(x: any, alpha: any, beta: any, cumulative: any, a: any, b: any, ...args: any[]): any;
    /**
     * Returns the inverse of the cumulative distribution function for a specified beta distribution.
     *
     * Category: Statistical
     *
     * @param {*} probability A probability associated with the beta distribution.
     * @param {*} alpha A parameter of the distribution.
     * @param {*} beta A parameter the distribution.
     * @param {*} a Optional. A lower bound to the interval of x.
     * @param {*} b Optional. An upper bound to the interval of x.
     * @returns
     */
    function INV(probability: any, alpha: any, beta: any, a: any, b: any): any;
}
export namespace BINOM {
    /**
     * Returns the individual term binomial distribution probability.
     *
     * Category: Statistical
     *
     * @param {*} number_s The number of successes in trials.
     * @param {*} trials The number of independent trials.
     * @param {*} probability_s The probability of success on each trial.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, then BINOM.DIST returns the cumulative distribution function, which is the probability that there are at most number_s successes; if FALSE, it returns the probability mass function, which is the probability that there are number_s successes.
     * @returns
     */
    function DIST(number_s: any, trials: any, probability_s: any, cumulative: any): any;
    namespace DIST {
        /**
         * Returns the probability of a trial result using a binomial distribution.
         *
         * Category: Statistical
         *
         * @param {*} trials The number of independent trials. Must be greater than or equal to 0.
         * @param {*} probability_s The probability of success in each trial. Must be greater than or equal to 0 and less than or equal to 1.
         * @param {*} number_s The number of successes in trials. Must be greater than or equal to 0 and less than or equal to Trials.
         * @param {*} number_s2 Optional. If provided, returns the probability that the number of successful trials will fall between Number_s and number_s2. Must be greater than or equal to Number_s and less than or equal to Trials.
         * @returns
         */
        function RANGE(trials: any, probability_s: any, number_s: any, number_s2: any): number | Error;
    }
    /**
     * Returns the smallest value for which the cumulative binomial distribution is less than or equal to a criterion value.
     *
     * Category: Statistical
     *
     * @param {*} trials The number of Bernoulli trials.
     * @param {*} probability_s The probability of a success on each trial.
     * @param {*} alpha The criterion value.
     * @returns
     */
    function INV(trials: any, probability_s: any, alpha: any): number | Error;
}
export namespace CHISQ {
    /**
     * Returns the cumulative beta probability density function.
     *
     * Category: Statistical
     *
     * @param {*} x The value at which you want to evaluate the distribution.
     * @param {*} deg_freedom The number of degrees of freedom.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, CHISQ.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, deg_freedom: any, cumulative: any): any;
    namespace DIST {
        /**
         * Returns the one-tailed probability of the chi-squared distribution.
         *
         * Category: Statistical
         *
         * @param {*} x The value at which you want to evaluate the distribution.
         * @param {*} deg_freedom The number of degrees of freedom.
         * @returns
         */
        function RT(x: any, deg_freedom: any): number | Error;
    }
    /**
     * Returns the cumulative beta probability density function.
     *
     * Category: Statistical
     *
     * @param {*} probability A probability associated with the chi-squared distribution.
     * @param {*} deg_freedom The number of degrees of freedom.
     * @returns
     */
    function INV(probability: any, deg_freedom: any): any;
    namespace INV {
        /**
         * Returns the inverse of the one-tailed probability of the chi-squared distribution.
         *
         * Category: Statistical
         *
         * @param {*} probability A probability associated with the chi-squared distribution.
         * @param {*} deg_freedom The number of degrees of freedom.
         * @returns
         */
        function RT(probability: any, deg_freedom: any): any;
    }
    /**
     * Returns the test for independence.
     *
     * Category: Statistical
     *
     * @param {*} actual_range The range of data that contains observations to test against expected values.
     * @param {*} expected_range The range of data that contains the ratio of the product of row totals and column totals to the grand total.
     * @returns
     */
    function TEST(actual_range: any, expected_range: any, ...args: any[]): number | Error;
}
export namespace CONFIDENCE {
    /**
     * Returns the confidence interval for a population mean.
     *
     * Category: Statistical
     *
     * @param {*} alpha The significance level used to compute the confidence level. The confidence level equals 100*(1 - alpha)%, or in other words, an alpha of 0.05 indicates a 95 percent confidence level.
     * @param {*} standard_dev The population standard deviation for the data range and is assumed to be known.
     * @param {*} size The sample size.
     * @returns
     */
    function NORM(alpha: any, standard_dev: any, size: any): number | Error;
    /**
     * Returns the confidence interval for a population mean, using a Student's t distribution.
     *
     * Category: Statistical
     *
     * @param {*} alpha The significance level used to compute the confidence level. The confidence level equals 100*(1 - alpha)%, or in other words, an alpha of 0.05 indicates a 95 percent confidence level.
     * @param {*} standard_dev The population standard deviation for the data range and is assumed to be known.
     * @param {*} size The sample size.
     * @returns
     */
    function T(alpha: any, standard_dev: any, size: any): number | Error;
}
export namespace COVARIANCE {
    /**
     * Returns covariance, the average of the products of paired deviations.
     *
     * Category: Statistical
     *
     * @param {*} array1 The first value range of integers.
     * @param {*} array2 The second value range of integers.
     * @returns
     */
    function P(array1: any, array2: any): number | Error;
    /**
     * Returns the sample covariance, the average of the products deviations for each data point pair in two data sets.
     *
     * Category: Statistical
     *
     * @param {*} array1 The first value range of integers.
     * @param {*} array2 The second value range of integers.
     * @returns
     */
    function S(array1: any, array2: any): any;
}
export namespace EXPON {
    /**
     * Returns the exponential distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value of the function.
     * @param {*} lambda The parameter value.
     * @param {*} cumulative A logical value that indicates which form of the exponential function to provide. If cumulative is TRUE, EXPON.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, lambda: any, cumulative: any): any;
}
export namespace F {
    /**
     * Returns the F probability distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value at which to evaluate the function.
     * @param {*} deg_freedom1 The numerator degrees of freedom.
     * @param {*} deg_freedom2 The denominator degrees of freedom.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, F.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, deg_freedom1: any, deg_freedom2: any, cumulative: any): any;
    namespace DIST {
        /**
         * Returns the F probability distribution.
         *
         * Category: Statistical
         *
         * @param {*} x The value at which to evaluate the function.
         * @param {*} deg_freedom1 The numerator degrees of freedom.
         * @param {*} deg_freedom2 The denominator degrees of freedom.
         * @returns
         */
        function RT(x: any, deg_freedom1: any, deg_freedom2: any, ...args: any[]): number | Error;
    }
    /**
     * Returns the inverse of the F probability distribution.
     *
     * Category: Statistical
     *
     * @param {*} probability A probability associated with the F cumulative distribution.
     * @param {*} deg_freedom1 The numerator degrees of freedom.
     * @param {*} deg_freedom2 The denominator degrees of freedom.
     * @returns
     */
    function INV(probability: any, deg_freedom1: any, deg_freedom2: any): any;
    namespace INV {
        /**
         * Returns the inverse of the F probability distribution.
         *
         * Category: Statistical
         *
         * @param {*} probability A probability associated with the F cumulative distribution.
         * @param {*} deg_freedom1 The numerator degrees of freedom.
         * @param {*} deg_freedom2 The denominator degrees of freedom.
         * @returns
         */
        function RT(probability: any, deg_freedom1: any, deg_freedom2: any, ...args: any[]): any;
    }
    /**
     * Returns the result of an F-test.
     *
     * Category: Statistical
     *
     * @param {*} array1 The first array or range of data.
     * @param {*} array2 The second array or range of data.
     * @returns
     */
    function TEST(array1: any, array2: any): number | Error;
}
export namespace HYPGEOM {
    /**
     * Returns the hypergeometric distribution.
     *
     * Category: Statistical
     *
     * @param {*} sample_s The number of successes in the sample.
     * @param {*} number_sample The size of the sample.
     * @param {*} population_s The number of successes in the population.
     * @param {*} number_pop The population size.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, then HYPGEOM.DIST returns the cumulative distribution function; if FALSE, it returns the probability mass function.
     * @returns
     */
    function DIST(sample_s: any, number_sample: any, population_s: any, number_pop: any, cumulative: any): number | Error;
}
export namespace LOGNORM {
    /**
     * Returns the cumulative lognormal distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value at which to evaluate the function.
     * @param {*} mean The mean of ln(x).
     * @param {*} standard_dev The standard deviation of ln(x).
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, LOGNORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, mean: any, standard_dev: any, cumulative: any): any;
    /**
     * Returns the inverse of the lognormal cumulative distribution.
     *
     * Category: Statistical
     *
     * @param {*} probability A probability associated with the lognormal distribution.
     * @param {*} mean The mean of ln(x).
     * @param {*} standard_dev The standard deviation of ln(x).
     * @returns
     */
    function INV(probability: any, mean: any, standard_dev: any): any;
}
export namespace MODE {
    /**
     * Returns a vertical array of the most frequently occurring, or repetitive values in an array or range of data.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Number arguments 2 to 254 for which you want to calculate the mode. You can also use a single array or a reference to an array instead of arguments separated by commas.
     * @returns
     */
    function MULT(...args: any[]): any[] | Error;
    /**
     * Returns the most common value in a data set.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Arguments 2 to 254 for which you want to calculate the mode. You can also use a single array or a reference to an array instead of arguments separated by commas.
     * @returns
     */
    function SNGL(...args: any[]): any;
}
export namespace NEGBINOM {
    /**
     * Returns the negative binomial distribution.
     *
     * Category: Statistical
     *
     * @param {*} number_f The number of failures.
     * @param {*} number_s The threshold number of successes.
     * @param {*} probability_s The probability of a success.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, NEGBINOM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(number_f: any, number_s: any, probability_s: any, cumulative: any): any;
}
export namespace NORM {
    /**
     * Returns the normal cumulative distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value for which you want the distribution.
     * @param {*} mean The arithmetic mean of the distribution.
     * @param {*} standard_dev The standard deviation of the distribution.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, NORM.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, mean: any, standard_dev: any, cumulative: any): any;
    /**
     * Returns the inverse of the normal cumulative distribution.
     *
     * Category: Statistical
     *
     * @param {*} probability A probability corresponding to the normal distribution.
     * @param {*} mean The arithmetic mean of the distribution.
     * @param {*} standard_dev The standard deviation of the distribution.
     * @returns
     */
    function INV(probability: any, mean: any, standard_dev: any): any;
    namespace S {
        /**
         * Returns the standard normal cumulative distribution.
         *
         * Category: Statistical
         *
         * @param {*} z The value for which you want the distribution.
         * @param {*} cumulative Cumulative is a logical value that determines the form of the function. If cumulative is TRUE, NORMS.DIST returns the cumulative distribution function; if FALSE, it returns the probability mass function.
         * @returns
         */
        function DIST(z: any, cumulative: any): any;
        /**
         * Returns the inverse of the standard normal cumulative distribution.
         *
         * Category: Statistical
         *
         * @param {*} probability A probability corresponding to the normal distribution.
         * @returns
         */
        function INV(probability: any): any;
    }
}
export namespace PERCENTILE {
    /**
     * Returns the k-th percentile of values in a range, where k is in the range 0..1, exclusive.
     *
     * Category: Statistical
     *
     * @returns
     */
    function EXC(array: any, k: any): number | Error;
    /**
     * Returns the k-th percentile of values in a range.
     *
     * Category: Statistical
     *
     * @param {*} array The array or range of data that defines relative standing.
     * @param {*} k The percentile value in the range 0..1, inclusive.
     * @returns
     */
    function INC(array: any, k: any): number | Error;
}
export namespace PERCENTRANK {
    /**
     * Returns the rank of a value in a data set as a percentage (0..1, exclusive) of the data set.
     *
     * Category: Statistical
     *
     * @param {*} array The array or range of data with numeric values that defines relative standing
     * @param {*} x The value for which you want to know the rank.
     * @param {*} significance Optional. A value that identifies the number of significant digits for the returned percentage value. If omitted, PERCENTRANK.EXC uses three digits (0.xxx).
     * @returns
     */
    function EXC(array: any, x: any, significance: any): number | Error;
    /**
     * Returns the percentage rank of a value in a data set.
     *
     * Category: Statistical
     *
     * @param {*} array The array or range of data with numeric values that defines relative standing.
     * @param {*} x The value for which you want to know the rank.
     * @param {*} significance Optional. A value that identifies the number of significant digits for the returned percentage value. If omitted, PERCENTRANK.INC uses three digits (0.xxx).
     * @returns
     */
    function INC(array: any, x: any, significance: any): number | Error;
}
export namespace POISSON {
    /**
     * Returns the Poisson distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The number of events.
     * @param {*} mean The expected numeric value.
     * @param {*} cumulative A logical value that determines the form of the probability distribution returned. If cumulative is TRUE, POISSON.DIST returns the cumulative Poisson probability that the number of random events occurring will be between zero and x inclusive; if FALSE, it returns the Poisson probability mass function that the number of events occurring will be exactly x.
     * @returns
     */
    function DIST(x: any, mean: any, cumulative: any): any;
}
export namespace QUARTILE {
    /**
     * Returns the quartile of the data set, based on percentile values from 0..1, exclusive.
     *
     * Category: Statistical
     *
     * @param {*} array The array or value range of numeric values for which you want the quartile value.
     * @param {*} quart Indicates which value to return.
     * @returns
     */
    function EXC(range: any, quart: any): number | Error;
    /**
     * Returns the quartile of a data set.
     *
     * Category: Statistical
     *
     * @param {*} array The array or value range of numeric values for which you want the quartile value.
     * @param {*} quart Indicates which value to return.
     * @returns
     */
    function INC(range: any, quart: any): number | Error;
}
export namespace RANK {
    /**
     * Returns the rank of a number in a list of numbers.
     *
     * Category: Statistical
     *
     * @param {*} number The number whose rank you want to find.
     * @param {*} ref An array of, or a reference to, a list of numbers. Nonnumeric values in Ref are ignored.
     * @param {*} order Optional. A number specifying how to rank number.
     * @returns
     */
    function AVG(number: any, ref: any, order: any): any;
    /**
     * Returns the rank of a number in a list of numbers.
     *
     * Category: Statistical
     *
     * @param {*} number The number whose rank you want to find.
     * @param {*} ref An array of, or a reference to, a list of numbers. Non-numeric values in Ref are ignored.
     * @param {*} order Optional. A number specifying how to rank number.
     * @returns
     */
    function EQ(number: any, ref: any, order: any): any;
}
export namespace STDEV {
    /**
     * Calculates standard deviation based on the entire population.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Number arguments 2 to 254 corresponding to a population. You can also use a single array or a reference to an array instead of arguments separated by commas.
     * @returns
     */
    function P(...args: any[]): number;
    /**
     * Estimates standard deviation based on a sample.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Number arguments 2 to 254 corresponding to a sample of a population. You can also use a single array or a reference to an array instead of arguments separated by commas.
     * @returns
     */
    function S(...args: any[]): number;
}
export namespace T {
    /**
     * Returns the Percentage Points (probability) for the Student t-distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The numeric value at which to evaluate the distribution
     * @param {*} deg_freedom An integer indicating the number of degrees of freedom.
     * @param {*} cumulative A logical value that determines the form of the function. If cumulative is TRUE, T.DIST returns the cumulative distribution function; if FALSE, it returns the probability density function.
     * @returns
     */
    function DIST(x: any, deg_freedom: any, cumulative: any): number | Error;
    namespace DIST {
        /**
         * Returns the Percentage Points (probability) for the Student t-distribution
         *
         * Category: Statistical
         *
         * @param {*} x The numeric value at which to evaluate the distribution.
         * @param {*} deg_freedom An integer indicating the number of degrees of freedom.
         * @returns
         */
        function _2T(x: any, deg_freedom: any, ...args: any[]): number | Error;
        /**
         * Returns the Student's t-distribution.
         *
         * Category: Statistical
         *
         * @param {*} x The numeric value at which to evaluate the distribution.
         * @param {*} deg_freedom An integer indicating the number of degrees of freedom.
         * @returns
         */
        function RT(x: any, deg_freedom: any, ...args: any[]): number | Error;
    }
    /**
     * Returns the t-value of the Student's t-distribution as a function of the probability and the degrees of freedom.
     *
     * Category: Statistical
     *
     * @param {*} probability The probability associated with the Student's t-distribution.
     * @param {*} deg_freedom The number of degrees of freedom with which to characterize the distribution.
     * @returns
     */
    function INV(probability: any, deg_freedom: any): any;
    namespace INV {
        /**
         * Returns the inverse of the Student's t-distribution
         *
         * Category: Statistical
         *
         * @param {*} probability The probability associated with the Student's t-distribution.
         * @param {*} deg_freedom The number of degrees of freedom with which to characterize the distribution.
         * @returns
         */
        function _2T(probability: any, deg_freedom: any): number | Error;
    }
    /**
     * Returns the probability associated with a Student's t-test.
     *
     * Category: Statistical
     *
     * @param {*} array1 The first data set.
     * @param {*} array2 The second data set.
     * @returns
     */
    function TEST(array1: any, array2: any): number | Error;
}
export namespace VAR {
    /**
     * Calculates variance based on the entire population.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Number arguments 2 to 254 corresponding to a population.
     * @returns
     */
    function P(...args: any[]): number | Error;
    /**
     * Estimates variance based on a sample.
     *
     * Category: Statistical
     *
     * @param {*} args number1, number2, ... Number arguments 2 to 254 corresponding to a sample of a population.
     * @returns
     */
    function S(...args: any[]): number;
}
export namespace WEIBULL {
    /**
     * Returns the Weibull distribution.
     *
     * Category: Statistical
     *
     * @param {*} x The value at which to evaluate the function.
     * @param {*} alpha A parameter to the distribution.
     * @param {*} beta A parameter to the distribution.
     * @param {*} cumulative Determines the form of the function.
     * @returns
     */
    function DIST(x: any, alpha: any, beta: any, cumulative: any): number | Error;
}
export namespace Z {
    /**
     * Returns the one-tailed probability-value of a z-test.
     *
     * Category: Statistical
     *
     * @param {*} array The array or range of data against which to test x.
     * @param {*} x The value to test.
     * @param {*} sigma Optional. The population (known) standard deviation. If omitted, the sample standard deviation is used.
     * @returns
     */
    function TEST(array: any, x: any, sigma: any): number | Error;
}
