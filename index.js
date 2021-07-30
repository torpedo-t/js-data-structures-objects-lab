// Write your solution in this file!
// define a driver variable and assign it to an Object
const driver = {}

// write a function updateDriverWithKeyAndValue() 
// will take 3 arguments: a driver Object, a key, and a updateDriverWithKeyAndValue
// this function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

// destructivelyUpdateDriverWithKeyAndValue() 
// this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// deleteFromDriverByKey()
// this function should take in a driver Object and a key
// It should delete the key/value pair for the key that was passed in from the driver object
// shouldn't mutate the driver passed in.
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver, key);
    delete newObj[key];
    return newObj;
}

// destructivelyDeleteFromDriverByKey()
// this function should work the same as the deleteFromDriverByKey(), but it should mutate the driver passed in
// Be sure and consider whether dot-notation or bracket-notation might affect your solution.
function destructivelyDeleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign(driver, key);
    delete newDriver[key];
    return newDriver
}

