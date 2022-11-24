//implement Apartment class based on function

const maxAmountOfPeopleInApartment = 4;
const pricePerPersonPerDay = 100;
const myApartment = new Apartment(
  maxAmountOfPeopleInApartment,
  pricePerPersonPerDay
);

myApartment.getBookingPrice(3, 2); // -> 600
myApartment.setPricePerPersonPerDay(50);
myApartment.getBookingPrice(3, 2); // -> 300
