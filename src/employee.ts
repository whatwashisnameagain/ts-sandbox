let employee: {
    // start of type declaration
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    // end of type declaration
} = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date)
    }
}

// Employee 2 Created with type alias

type Employee = {
    // start of type declaration
    readonly id: number,
    name: string,
    retire: (date: Date) => void
    // end of type declaration
}

let employee_two: Employee = {
    id: 2, 
    name: 'Rhemidy',
    retire: (date: Date) => {
        console.log(date);
    }
}

let employee_three: Employee = {
    id: 3, 
    name: 'RTM',
    retire: (date: Date) => {
        console.log(date);
    }
}