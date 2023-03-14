export interface ICar {
    id?: number,
    make: string,
    model: string,
}

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

export const getAll = () => {
    return cars
}

export const findById = (id: string) => {
    const parsedId = parseInt(id)

    const car = cars.find(c => c.id === parsedId)
    return car
}

export const add = (car: ICar) => {
    const lastCar = cars.slice(-1)[0]

    let id = (lastCar?.id);
    id = id ? id + 1 : 1;

    cars.push({
        id,
        make: car.make,
        model: car.model
    })
}

export const update = (id: string, car: ICar) => {
    const parsedId = parseInt(id)

    const i = cars.findIndex(c => c.id === parsedId)

    cars[i].make = car.make
    cars[i].model = car.model
}

export const deleteById = (id: string) => {
    const parsedId = parseInt(id)

    const i = cars.findIndex(c => c.id === parsedId)
    cars.splice(i, 1)
}