import styled from "styled-components"
import { breakPoints } from "../../constants/breakPoints";

const Button = ({ name, width, background, margin, padding, content, onClick, disabled, cursor }) => {

    return (
        <StyledButton name={name} $background={background} 
                        $margin={margin}
                        $padding={padding}
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
    margin: ${props => props.$margin};
    padding: ${props => props.$padding ? props.$padding : "2% 0"};
    cursor: ${props => props.$cursor ? props.$cursor : "pointer"}; 
    border: none;
    border-radius: 5px;
    font-size: 1.6vh;
    user-select: none;
    color: white;
    background: ${props => props.$background ? props.$background : "#6BA368"};

    ${breakPoints.medium} {
        font-size: 1.6vw;
    }
    ${breakPoints.small} {
        font-size: 1.8vw;
    }
    ${breakPoints.small} {
        font-size: 2vw;
    }
`;

export default Button;