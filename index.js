// Code your solution in this file!
let drivers = [];
const returnFirstTwoDrivers = function(drivers) { return drivers.slice(0, 2) };
const returnLastTwoDrivers = function(drivers) { return drivers.slice(-2) };

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(farePrice) {
    return function(finalFare) {
        return farePrice * finalFare;
    }
}

const fareDoubler = function(createFareMultiplier) { return createFareMultiplier * 2 };

const fareTripler = function(createFareMultiplier) { return createFareMultiplier * 3 };

const selectDifferentDrivers = function(drivers, driversToReturn) {
    return driversToReturn(drivers);
};