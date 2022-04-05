// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArray){
    const firstTwoArray = driverArray.slice(0, 2);
    return firstTwoArray;
};

const returnLastTwoDrivers = function(driverArray){
    const lastTwoArray = driverArray.slice(driverArray.length-2, driverArray.length);
    return lastTwoArray;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare*multiplier;
    };
};

const fareDoubler = function createFareMultiplier(fare){
    return fare*2;
};

const fareTripler = function createFareMultiplier(fare){
    return fare*3;
};

function selectDifferentDrivers(arrayOfDrivers, selectingDrivers){
    let differentDrivers = selectingDrivers(arrayOfDrivers);
    return differentDrivers;
};