import styled from "styled-components";

const Input = ({ name, type, width, 
                padding, margin, value, 
                onChange, onBlur, placeholder, disabled, textAlign }) => {
    return <StyledInput 
                    value={value}
                    name={name}
                    type={type}
                    width={width}
                    $padding={padding}
                    $margin={margin}
                    $textAlign={textAlign}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    disabled={disabled}
                    autoComplete="off" />
};

const StyledInput = styled.input`
    width: ${props => props.width}%;
    padding: ${props => props.$padding};
    margin: ${props => props.$margin};
    border: 1px solid #6BA368;
    border-radius: 5px;
    background: ${props => props.disabled ? "none" : "white"};
    font-size: 16px;
    text-align: ${props => props.$textAlign};

    &: focus {
        outline: none;   
    }
`;

export default Input;