/**
 * Formula.js only
 *
 * @param {*} database
 * @param {*} title
 * @returns
 */
export function FINDFIELD(database: any, title: any): Error;
/**
 * Returns the average of selected database entries.
 *
 * Category: Database
 *
 * @param {*} database Range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria Range of values that contains the conditions you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DAVERAGE(database: any, field: any, criteria: any): number | Error;
/**
 * Counts the values that contain numbers in a database.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as the argument includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DCOUNT(database: any, field: any, criteria: any): any;
/**
 * Counts nonblank values in a database.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Optional. Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DCOUNTA(database: any, field: any, criteria: any): number | Error;
/**
 * Extracts from a database a single record that matches the specified criteria.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DGET(database: any, field: any, criteria: any): any;
/**
 * Returns the maximum value from selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DMAX(database: any, field: any, criteria: any): any;
/**
 * Returns the minimum value from selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DMIN(database: any, field: any, criteria: any): any;
/**
 * Multiplies the values in a particular field of records that match the criteria in a database.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DPRODUCT(database: any, field: any, criteria: any): number | Error;
/**
 * Estimates the standard deviation based on a sample of selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DSTDEV(database: any, field: any, criteria: any): number | Error;
/**
 * Calculates the standard deviation based on the entire population of selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DSTDEVP(database: any, field: any, criteria: any): number | Error;
/**
 * Adds the numbers in the field column of records in the database that match the criteria.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria Is the range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DSUM(database: any, field: any, criteria: any): number | Error;
/**
 * Estimates variance based on a sample from selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DVAR(database: any, field: any, criteria: any): number | Error;
/**
 * Calculates variance based on the entire population of selected database entries.
 *
 * Category: Database
 *
 * @param {*} database The range of values that makes up the list or database. A database is a list of related data in which rows of related information are records, and columns of data are fields. The first row of the list contains labels for each column.
 * @param {*} field Indicates which column is used in the function. Enter the column label enclosed between double quotation marks, such as "Age" or "Yield," or a number (without quotation marks) that represents the position of the column within the list: 1 for the first column, 2 for the second column, and so on.
 * @param {*} criteria The range of values that contains the conditions that you specify. You can use any range for the criteria argument, as long as it includes at least one column label and at least one value below the column label in which you specify a condition for the column.
 * @returns
 */
export function DVARP(database: any, field: any, criteria: any): number | Error;
