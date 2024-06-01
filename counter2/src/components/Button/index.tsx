import styled from "styled-components";

const StyledButton = styled.button`
    border: 0;
    color: #ffffff;
    background-color: #ff5722;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;

    &:hover{
        background-color: #ff5722
        opacity: 0.8;
    }

    &:active{
        box-shadow: inset 5px 5px 10px rgba(0,0,0,0.2)
    }
`;

// 인터페이스를 통해 해당 props 내 전달할 값들의 타입을 지정해준다.
interface Props{
    readonly label: string;
    readonly onclick?: () => void; // 만약 필수 요구자료가 아닌 경우는 프로퍼티명 끝에 ?를 추가로 붙여주면 선택적으로 받는다.
}

const Button = ({label,onclick} : Props) => {
    return(
        <>
            <StyledButton onClick={onclick}>{label}</StyledButton>
        </>
    );
}

export default Button;