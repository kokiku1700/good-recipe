import styled from "styled-components"

const Button = ({ name, width, background, content, onClick, disabled, cursor }) => {

    return (
        <StyledButton name={name} $background={background} 
                        $width={width} onClick={onClick}
                        disabled={disabled}
                        $cursor={cursor}
        >
            {content}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: ${props => props.$width}%;
    margin: 0 1%;
    padding: 2% 0;
    cursor: ${props => props.$cursor ? props.$cursor : "pointer"}; 
    border: none;
    border-radius: 5px;
    font-size: 16px;
    user-select: none;
    color: white;
    background: ${props => props.$background ? props.$background : "#6BA368"};
`

export default Button;