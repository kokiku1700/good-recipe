import styled from "styled-components"

const Button = ({ width, background, content, onClick }) => {

    return (
        <StyledButton $width={width} background={background} onClick={onClick} >
            {content}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: ${props => props.$width}%;
    background: ${props => props.background};
    margin: 0 1%;
    padding: 2% 0;
    cursor: pointer; 
    border: none;
    border-radius: 5px;
    font-size: 16px;
    user-select: none;
    color: white;
    background: #6BA368;
`

export default Button;