/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */
const getAllStates = (data) => {
    new Set
    
    (data.map(({address}) => address).flat().map(({state})=> state))
    
};

module.exports = getAllStates;
