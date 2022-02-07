// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
    return fare * integer
    }
}
// const fareDoubler = function() {
//     createFareMultiplier()
//     return createFareMultiplier * 2
// }

const fareDoubler = createFareMultiplier(2)

// const fareTripler = function() {
//     createFareMultiplier()
//     return createFareMultiplier * 3
// }

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFunction) {
    if(returnFunction == returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    }
    else if(returnFunction == returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}