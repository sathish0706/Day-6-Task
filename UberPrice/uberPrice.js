class UberPrice {
  constructor(totalKm, waitingTime = 0) {
    this.totalKm = totalKm;
    this.waitingTime = waitingTime;
  }

  calculate() {
    if (this.totalKm <= 2) {
      return 50 + " Rs";
    }

    this.totalKm = this.totalKm - 2;
    return `${30 + this.totalKm * 15 + this.waitingTime * 2} Rs`;
  }
}

let Ride1 = new UberPrice(2);
console.log(Ride1.calculate());

let Ride2 = new UberPrice(65, 5);
console.log(Ride2.calculate());
