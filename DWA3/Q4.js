// Using typedef to create my own custom object

/**
 *
 * @typedef {object}Fruit - creates a new object called 'Fruit"
 *
 * @property {number} apple
 *
 * * @property {number} pear
 *
 * * @property {number} banana
 *
 * * @property {number} tomato
 */

/**
 * @type {Fruit}
 */
const createObj = {
    apple: 1,
    pear: 2,
    banana: 3,
    tomato: 4
};

console.log(createObj);
