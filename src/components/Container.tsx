import styled from "styled-components";
import Colors from "../constants/Colors";

type Wrapper = {
    bg?: string;
    padding: string;
};
export const Wrapper = styled.div<Wrapper>`
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding: ${(props) => props.padding};
`;

type BoxShadowContainerProps = {
    shadowColor?: string;
    radius?: string;
};
export const BoxShadowContainer = styled.div<BoxShadowContainerProps>`
    box-shadow: 0px 0px 20px
        ${(props) => props.shadowColor || Colors.brandGreen};
    border-radius: ${(props) => props.radius || "8px"};
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem auto;
    padding: 2rem;
    align-items: center;
    width: 65%;
    position: relative;
    bottom: 8rem;
    background-color: "#0000005e";
`;

const Container = styled.div`
    max-width: 1920px;
    padding-left: 5rem;
    padding-right: 5rem;
    margin: auto;

    @media (max-width: 1300px) {
        max-width: 980px;
    }

    @media (max-width: 992px) {
        max-width: 800px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

export default Container;