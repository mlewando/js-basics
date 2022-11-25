//implement Apartment class based on function

class Apartment {
  constructor(maxAmountOfPeopleInApartment, pricePerPersonPerDay) {
    this.maxAmountOfPeopleInApartment = maxAmountOfPeopleInApartment;
    this.pricePerPersonPerDay = pricePerPersonPerDay;
  }
  getBookingPrice(numberOfPeople, numberOfDays) {
    return this.pricePerPersonPerDay * numberOfPeople * numberOfDays;
  }
  setPricePerPersonPerDay(price) {
    this.pricePerPersonPerDay = price;
  }
}

class Villa extends Apartment {
  constructor(maxAmountOfPeopleInVilla, gardenSize, pricePerPersonPerDay) {
    super(maxAmountOfPeopleInVilla, pricePerPersonPerDay);
    this.gardenSize = gardenSize;
  }
  getGardenSize() {
    return this.gardenSize;
  }
}

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
