import styled from "styled-components";

const InputContainer = styled.div`
    margin: 20px;
`;

const Label = styled.label``;

const Input = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
`;

const InputField = ({ label, value, _onChange}) => {
    return (
        <InputContainer>
            <Label>
                {label}
                <Input
                    name={label}
                    value={value}
                    onChange={_onChange}
                    placeholder='$330,000.00'
                    type='text'
                />
            </Label>
        </InputContainer>
    );
};

export default InputField;
