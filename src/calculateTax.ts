function calculateTax(income: number, taxYear = 2024):number {
    if ( income <  50_000 && taxYear < 2024 )
        return income * 5.75;
    return income * 7.2;
}

calculateTax(250_000, 2023);