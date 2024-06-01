import "./index.css";
import styled from "styled-components"; 

// 컴포넌트 명으로 함수를 만든다
const Title = () => {
    // 스타일링 등은 해당 컴포넌트의 리턴구문 전에 js 객체형태로 작성한다.
    const style = {color:'blue',backgroundColor: 'yellow'};

    const TitleH1 = styled.h1`
        margin-bottom: 32px;
    `;

    return(
        <>
            <TitleH1>Counter App</TitleH1>
            {/*<h1 style={style}>Counter App</h1>
            <h1 style={style}>태그가 여러개면 일일히 다 붙여줄거임?</h1>
            <h2> 리액트 </h2>
            <h2> 타입스크립트 </h2>
            <h2> 스프링부트 </h2>
            <Subtitle />
            <Subtitle />
            <Subtitle />*/}
        </>
    );
}

export default Title;