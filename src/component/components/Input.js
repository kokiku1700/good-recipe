import styled from "styled-components";

const Input = ({ type, value, width, padding, margin, onChange, placeholder, onBlur, disabled }) => {
    return <StyledInput 
                    type={type}
                    value={value}
                    width={width}
                    $padding={padding}
                    $margin={margin}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    autoComplete="off"
                    disabled={disabled} />
};

const StyledInput = styled.input`
    width: ${props => props.width}%;
    padding: ${props => props.$padding};
    margin: ${props => props.$margin};
    border: 1px solid #6BA368;
    border-radius: 5px;
    background: none;

    &: focus {
        outline: none;   
    }
`;

export default Input;