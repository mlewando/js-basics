//implement Apartment class based on function

function Apartment(maxAmountOfPeopleInApartment, pricePerPersonPerDay) {
  this.maxAmountOfPeopleInApartment = maxAmountOfPeopleInApartment;
  this.pricePerPersonPerDay = pricePerPersonPerDay;
}
Apartment.prototype.getBookingPrice = function (numberOfPeople, numberOfDays) {
  return this.pricePerPersonPerDay * numberOfPeople * numberOfDays;
};
Apartment.prototype.setPricePerPersonPerDay = function (price) {
  this.pricePerPersonPerDay = price;
};

function Villa(maxAmountOfPeopleInVilla, gardenSize, pricePerPersonPerDay) {
  Apartment.call(this, maxAmountOfPeopleInVilla, pricePerPersonPerDay);
  this.gardenSize = gardenSize;
}
Object.setPrototypeOf(Villa.prototype, Apartment.prototype);
Villa.prototype.getGardenSize = function () {
  return this.gardenSize;
};

const myApartment = new Apartment(4, 100);
Object.getPrototypeOf(myApartment) === Apartment.prototype; //?

myApartment.getBookingPrice(3, 2); // -> 600
myApartment.setPricePerPersonPerDay(50);
myApartment.getBookingPrice(3, 2); // -> 300

const villa = new Villa(4, 300, 200);
Object.getPrototypeOf(villa) === Villa.prototype; //?
Object.getPrototypeOf(Object.getPrototypeOf(villa)) === Apartment.prototype; //?

villa.getBookingPrice(3, 2); //?
villa.setPricePerPersonPerDay(60);
villa.getBookingPrice(3, 2); //?
villa.getGardenSize(); //?
