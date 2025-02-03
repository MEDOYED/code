class TransportDemand {
  constructor(city, avgDailyPassengers, seasonalFactor, economicGrowthRate) {
    this.city = city;
    this.avgDailyPassengers = avgDailyPassengers;
    this.seasonalFactor = seasonalFactor;
    this.economicGrowthRate = economicGrowthRate;
  }

  estimateDemand() {
    return Math.round(
      this.avgDailyPassengers *
        this.seasonalFactor *
        (1 + this.economicGrowthRate),
    );
  }
}

class Vehicle {
  constructor(name, capacity, costPerTrip) {
    this.name = name;
    this.capacity = capacity;
    this.costPerTrip = costPerTrip;
  }
}

class FleetOptimization {
  constructor(demand, vehicles) {
    this.demand = demand;
    this.vehicles = vehicles;
  }

  optimizeFleet() {
    let result = {};
    let remainingDemand = this.demand;

    this.vehicles.sort((a, b) => a.costPerTrip - b.costPerTrip);

    for (let vehicle of this.vehicles) {
      let tripsNeeded = Math.ceil(remainingDemand / vehicle.capacity);
      result[vehicle.name] = tripsNeeded;
      remainingDemand -= tripsNeeded * vehicle.capacity;
      if (remainingDemand <= 0) break;
    }

    return result;
  }
}

// Dane dla dwóch miast
let city1 = new TransportDemand('Miasto A', 1000, 1.2, 0.05);
let city2 = new TransportDemand('Miasto B', 800, 1.1, 0.03);

// Flota pojazdów
let vehicles = [
  new Vehicle('Autobus', 50, 100),
  new Vehicle('Minibus', 20, 50),
  new Vehicle('Van', 10, 30),
];

// Szacowanie zapotrzebowania
let demandCity1 = city1.estimateDemand();
let demandCity2 = city2.estimateDemand();

console.log(
  `Zapotrzebowanie na transport do ${city1.city}: ${demandCity1} pasażerów.`,
);
console.log(
  `Zapotrzebowanie na transport do ${city2.city}: ${demandCity2} pasażerów.`,
);

// Optymalizacja floty
let optimizationCity1 = new FleetOptimization(demandCity1, vehicles);
let optimizationCity2 = new FleetOptimization(demandCity2, vehicles);

console.log('Optymalizacja dla Miasto A:', optimizationCity1.optimizeFleet());
console.log('Optymalizacja dla Miasto B:', optimizationCity2.optimizeFleet());
v;
