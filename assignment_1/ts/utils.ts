import { books } from "./books"
import { cars } from "./cars"

function getId(isCarId: boolean) {
    // Get the last item in array
    if (isCarId) {
        const lastCar = cars.slice(-1)[0]
        let id = (lastCar?.id)
        return id
    }
    // No need for an else statement here as the return keyword will
    // stop the function and not continue.
    const lastCar = books.slice(-1)[0]
    let id = (lastCar?.id)
    return id


}

export function createNewId(isCarId: boolean): number {
    const newId = getId(isCarId) + 1;
    return newId;
}