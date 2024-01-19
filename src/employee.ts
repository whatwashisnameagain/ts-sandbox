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