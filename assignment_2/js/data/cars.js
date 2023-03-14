const cars = [
    {
        id: 1,
        make: "Volvo",
        model: "v70"
    },
    {
        id: 2,
        make: "Saab",
        model: "9000"
    },
    {
        id: 3,
        make: "Tesla",
        model: "p90"
    },
]

module.exports.getAll = () => {
    return cars
}

module.exports.findById = (id) => {
    id = parseInt(id)

    const car = cars.find(c => c.id === id)
    return car
}

module.exports.add = (car) => {
    const lastCar = cars.slice(-1)[0]

    let id = (lastCar?.id);
    id = id ? id + 1 : 1;

    cars.push({
        id,
        make: car.make,
        model: car.model
    })
}

module.exports.update = (id, car) => {
    id = parseInt(id)

    const i = cars.findIndex(c => c.id === id)

    cars[i].make = car.make
    cars[i].model = car.model
}

module.exports.deleteById = (id) => {
    id = parseInt(id)

    const i = cars.findIndex(c => c.id === id)
    cars.splice(i, 1)
}