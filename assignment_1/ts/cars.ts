// Declare and export interface for cars
export interface ICar {
    id: number;
    model: string;
    make: string;
}

// Make sure to use ICar when exporting list of cars

export const cars: ICar[] = [
    { id: 1, model: "Volvo", make: "v70" },
    { id: 2, model: "Saab", make: "9000" },
    { id: 3, model: "Tesla", make: "p90" },
]

