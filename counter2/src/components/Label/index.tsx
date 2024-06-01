import styled from "styled-components";

interface Props{
    counter:number;
};

const Label = ({counter}: Props) => {

    const StyledLabel = styled.label`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const StyledSpan = styled.span`
        margin: 0 16px;
        font-size: 1.2em;
    `;

    

    // Label 컴포넌트는 Counter App 이라는 문구 아래에 숫자를 표기해준다.

    return(
        <>
            <StyledLabel>
                <StyledSpan>{counter}</StyledSpan>
            </StyledLabel>
        </>
    );
}

export default Label;