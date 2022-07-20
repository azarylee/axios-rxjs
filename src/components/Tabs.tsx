import React, { MouseEvent } from "react";
import styled from "styled-components";

// constants
import Colors from "../constants/Colors";
import { Action } from "../Types";

const TabWrapper = styled.div`
    width: 5px;
    display: flex;
    flex-direction: column;
`;

type TabProps = {
    color?: string;
};
const Tab = styled.div<TabProps>`
    width: 5px;
    background-color: ${(props) => props.color || Colors.white};
    flex: 1;
    align-items: stretch;

    &:nth-child(even) {
        margin-top: 1rem;
    }
`;

type TabsProps = {
    onClick: Action;
    keyValue: number;
};
export default function Tabs(props: TabsProps) {
    const { onClick, keyValue } = props;

    return (
        <TabWrapper>
            <Tab
                color={keyValue === 0 ? Colors.brandGreen : ""}
                onClick={(e: MouseEvent<HTMLDivElement>) => onClick(e)}
                data-tabindex={0}
            />
            <Tab
                color={keyValue === 1 ? Colors.brandGreen : ""}
                onClick={(e: MouseEvent<HTMLDivElement>) => onClick(e)}
                data-tabindex={1}
            />
        </TabWrapper>
    );
}