import styled from "styled-components"

const Button = ({ width, content, onClick }) => {

    return (
        <StyledButton $width={width} onClick={onClick} >
            {content}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: ${props => props.$width}%;
    margin: 0 1%;
    padding: 2% 0;
    cursor: pointer; 
`

export default Button;