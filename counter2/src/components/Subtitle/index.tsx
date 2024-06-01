// import "../subtitle/index.css";
import styled from "styled-components";
const Subtitle = () => {

    /**
     * packages 추가하기 -> styled-components
     * styled-component의 특징
     * 특정 컴포넌트 내부의 열 요소에 전역적으로 css 적용 가능
     * 외부 컴포넌트에는 적용되지 않음
     * 그래서 컴포넌트 스타일링을 전역적으로 불필요하게 적용하지 않을 수 있음
     */
    const SubtitleH2 = styled.h2`
        color: gold;
        background: red;
    `;

    return(
        <>
            <SubtitleH2>SubTitle 이다</SubtitleH2>
        </>
    );
}

export default Subtitle;