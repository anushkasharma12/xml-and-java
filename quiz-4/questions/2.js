/**
 * Function to get array of all active users (not suspended users)
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of users
 */
const getActiveUsers = (data) => {
    //Should return a promise
    return new Promise((resolve) => {
        //filtering users except for suspended users from users
        resolve(data.filter((user) => !user.isSuspended ));
    });
};

module.exports = getActiveUsers;
