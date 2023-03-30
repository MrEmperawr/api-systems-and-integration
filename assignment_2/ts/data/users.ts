export interface IUser {
    id?: number;
    name: string;
    description: string;
}

const users: IUser[] = [
    {
        id: 1,
        name: "Mikael",
        description: "Likes board games"
    },
    {
        id: 2,
        name: "Michael",
        description: "Sounds like a göteborgare but is from Linköping"
    },
    {
        id: 3,
        name: "Fredrik",
        description: "King of Python"
    },
    {
        id: 4,
        name: "Vidar",
        description: "Big brain guy"
    },
]

export const getAll = () => {
    return users
}

export const findById = (id: string) => {
    const parsedId = parseInt(id)

    const user = users.find(c => c.id === parsedId)
    return user
}

export const add = (user: IUser) => {
    const lastuser = users.slice(-1)[0]

    let id = (lastuser?.id);
    id = id ? id + 1 : 1;

    users.push({
        id,
        name: user.name,
        description: user.description
    })
}

export const update = (id: string, user: IUser) => {
    const parsedId = parseInt(id)

    const i = users.findIndex(c => c.id === parsedId)

    users[i].name = user.name
    users[i].description = user.description
}

export const deleteById = (id: string) => {
    const parsedId = parseInt(id)

    const i = users.findIndex(c => c.id === parsedId)
    users.splice(i, 1)
}