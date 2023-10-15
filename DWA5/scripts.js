
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const pageDisplay = document.querySelector("body");

/**
 * Checks if the imputs are whole numbers AND if they are positive numbers: if not, throws error message.
 *
 * @param {string} dividend
 * @param {string} divider
 * @returns {boolean}
 */
const isValid = (dividend, divider) => {
    try {
        if (dividend === "" || divider === "") {
            throw new Error(
                "Division not performed. Both values are required in inputs. Try again"
            );
        } else if (dividend < 0 || divider < 0) {
            throw new Error(
                "Division not performed. Invalid number provided. Try again"
            );
        }
    } catch (err) {
        result.innerText = err.message;
        console.error(err.message);
        console.trace();
        return false;
    }
    return true;
};

/**
 * Checks whether the result of the division is a positive number, if it is NaN, it will throw
 * an error. NaN can only exist if non-number characters are entered in the input.
 *
 * @param {number} resultInteger
 * @returns {boolean}
 */
const isNumber = (resultInteger) => {
    try {
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(resultInteger) || resultInteger < 0) {
            throw new Error(
                "Something critical went wrong. Please reload the page"
            );
        }
    } catch (err) {
        pageDisplay.innerText = err.message;
        console.error("Input is NaN, reload the page");
        console.trace();
        return false;
    }
    return true;
};

/**
 * Shows the answer/error message to the html page after
 * sumbit button is clicked.
 *
 * @param {*} event
 */

const showAnswer = (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (isValid(dividend, divider)) {
        const resultInteger = Math.floor(dividend / divider);

        if (isNumber(resultInteger)) {
            result.innerText = resultInteger;
        }
    }
};

form.addEventListener("submit", showAnswer);
