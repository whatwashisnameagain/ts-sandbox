"use strict";
function calculateTax(income, taxYear = 2024) {
    if (income < 50000 && taxYear < 2024)
        return income * 5.75;
    return income * 7.2;
}
calculateTax(250000, 2023);
