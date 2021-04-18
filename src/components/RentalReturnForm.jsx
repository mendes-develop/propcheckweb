import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import InputField from "./InputField";
import calculateRentalROI from "../math/calculateRentalReturn";
import { convertToCurrency, removeChar } from "../math/fomatter";

const FormContainer = styled.div`
    padding: 25px;
    box-sizing: border-box;
`;

const RentalReturnForm = () => {
    const [annualInsurance, setAnnualInsurance] = useState("");
    const [monthlyExpenses, setMonthlyExpense] = useState("");
    const [purchasedPrice, setPurchasedPrice] = useState("");
    const [vacancyRate, setVacancyRate] = useState("");
    const [annualTaxes, setAnnualTaxes] = useState("");
    const [monthlyRent, setMonthlyRent] = useState("");
    const [waterSwear, setWaterSwear] = useState("");
    const dispatch = useDispatch();

    const _onchange = evt => {
        const currencyValue = convertToCurrency(evt.target.value);

        switch (evt.target.name) {
            case "Purchased Price":
                setPurchasedPrice(currencyValue);
                break;
            case "Annual Taxes":
                setAnnualTaxes(currencyValue);
                break;
            case "Annual Insurance":
                setAnnualInsurance(currencyValue);
                break;
            case "Water and Swear":
                setWaterSwear(currencyValue);
                break;
            case "Extra monthly expenses":
                setMonthlyExpense(currencyValue);
                break;
            case "Vacancy Rate":
                setVacancyRate(currencyValue);
                break;
            case "Montly Rent":
                setMonthlyRent(currencyValue);
                break;
            default:
                return;
        }
    };

    useEffect(() => {
        if (!purchasedPrice) return;

        const rental = calculateRentalROI({
            purchasedPrice: removeChar(purchasedPrice),
            annualTaxes: removeChar(annualTaxes),
            annualInsurance: removeChar(annualInsurance),
            waterSwear: removeChar(waterSwear),
            monthlyExpenses: removeChar(monthlyExpenses),
            vacancyRate: removeChar(vacancyRate),
            monthlyRent: removeChar(monthlyRent),
        });

        dispatch({ type: "updateRentalROI", payload: rental });
    }, [
        purchasedPrice,
        annualTaxes,
        annualInsurance,
        waterSwear,
        monthlyExpenses,
        vacancyRate,
        monthlyRent,
        dispatch,
    ]);

    function checkForValue(value) {
        // console.log(value)
        return value;
    }

    return (
        <FormContainer>
            <InputField
                label={"Purchased Price"}
                _onChange={_onchange}
                value={checkForValue(purchasedPrice)}
            />
            <InputField
                label={"Annual Taxes"}
                _onChange={_onchange}
                value={checkForValue(annualTaxes)}
            />
            <InputField
                label={"Annual Insurance"}
                _onChange={_onchange}
                value={checkForValue(annualInsurance)}
            />
            <InputField
                label={"Water and Swear"}
                _onChange={_onchange}
                value={checkForValue(waterSwear)}
            />
            <InputField
                label={"Extra monthly expenses"}
                _onChange={_onchange}
                value={checkForValue(monthlyExpenses)}
            />
            <InputField
                label={"Montly Rent"}
                _onChange={_onchange}
                value={checkForValue(monthlyRent)}
            />
            <InputField
                label={"Vacancy Rate"}
                value={vacancyRate}
                _onChange={_onchange}
            />
        </FormContainer>
    );
};

export default RentalReturnForm;
