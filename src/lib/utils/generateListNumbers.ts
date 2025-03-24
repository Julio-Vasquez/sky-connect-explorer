export type PropsArray = {
  length: number
  minValue?: number
  increment?: number
}

/**
 * @function generateListNumbers
 * @description Generates a sequence of numbers starting from a minimum value and increasing by a fixed increment.
 *
 * This utility function creates an array of numbers starting from `minValue`, with a total of `length` elements.
 * Each number increases by the specified `increment`.
 *
 * @param {PropsArray} params - Configuration object.
 * @param {number} params.length - Number of elements to generate.
 * @param {number} [params.minValue=0] - Starting number of the sequence.
 * @param {number} [params.increment=1] - Increment between each number in the sequence.
 *
 * @returns {number[]} An array containing the generated numeric sequence.
 *
 * @example
 * generateListNumbers({ length: 4, minValue: 1 })
 * // Returns: [1, 2, 3, 4]
 *
 * @example
 * generateListNumbers({ length: 3, minValue: 10, increment: 2 })
 * // Returns: [10, 12, 14]
 */
export const generateListNumbers = ({
  length,
  minValue = 0,
  increment = 1,
}: PropsArray) => Array.from({ length }, (_, index) => index * increment + minValue)
