const calculateRentalROI = function ({
    purchasedPrice,
    annualTaxes,
    annualInsurance,
    waterSwear,
    monthlyExpenses,
    vacancyRate,
    monthlyRent,
}) {
    const expenses =
        annualTaxes +
            annualInsurance +
            waterSwear * 12 +
            monthlyExpenses * 12 || 0;

    const income = monthlyRent * 12 || 0;
    const netReturn = income - expenses || 0;
    const roi = netReturn / purchasedPrice || 0;

    return {
        roi,
        income,
        netReturn,
        expenses,
    };
};

export default calculateRentalROI;
