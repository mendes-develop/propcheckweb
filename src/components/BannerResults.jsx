import styled from "styled-components";
import { useSelector } from "react-redux";
import { currencyFormatter, percentFormatter } from "../math/fomatter";

const BannerWrapper = styled.div`
    border: 1px solid blue;
`;

const Title = styled.h3``;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Label = styled.p``;

const Banner = () => {
    const { income, roi, netReturn, expenses } = useSelector(state => state);

    const formattedRoi = percentFormatter.format(roi);
    const formattedIncome = currencyFormatter.format(income);
    const formattedExpenses = currencyFormatter.format(expenses);
    const formattedNetReturn = currencyFormatter.format(netReturn);

    return (
        <BannerWrapper>
            <Row>
                <Title>ROI</Title>
                <Title>{formattedRoi}</Title>
            </Row>
            <Row>
                <Label>Retorno Bruto</Label>
                <Label>{formattedIncome}</Label>
            </Row>
            <Row>
                <Label>Expenses</Label>
                <Label>{formattedExpenses}</Label>
            </Row>
            <Row>
                <Label>Net income</Label>
                <Label>{formattedNetReturn}</Label>
            </Row>
        </BannerWrapper>
    );
};

export default Banner;
