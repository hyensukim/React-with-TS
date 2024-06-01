import Title from "../Title";
import Label from "../Label";
import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

// 컴포넌트 명으로 함수 생성.
const Container = () => {

    const [counter,setCounter] = useState(0);

    const ContainerDiv = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
    `;

    const StyledDiv = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const addCounter = () => {
        setCounter(counter + 1);
    };

    const subCounter = () => {
        setCounter(counter-1);
    }

    // 만약 css 기본문법이 아닌 jsx 문법으로 스타일링할 때는 케밥케이스(단어 사이에 - 사용)가
    // 아닌 카멜표기법으로 적어줘야 한다.
    // 왜냐하면, jsx는 결국 js 언어로 변환되기 때문에, js에서 '-' 는 뺄셈 연산자로 인식되기 때문이다.
    // TSX에서는 컴포넌트 사용 시 무조건 파스칼 표기법으로 사용하여 표현해야 한다.

    // TSX || JSX 양식에 맞춰 마크업 html 구성.
    return (
        // fragment 그룹화를 위한 태그 -> DOM 트리 구성 시 노드로 반영 X
        <> 
            <ContainerDiv>
                <Title />
                <StyledDiv>
                    <Button label="더하기" onclick={addCounter}/>
                    <Label counter={counter}/>
                    <Button label="빼기" onclick={subCounter}/>
                </StyledDiv>
            </ContainerDiv>
        </>
    );
}

//외부에서 해당 tsx 파일 로드가 가능하도록 export 추가
export default Container;