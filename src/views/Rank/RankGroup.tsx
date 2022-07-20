import React, { useEffect, useState } from "react";
import styled from "styled-components";

// components
import Container, { Wrapper } from "../../components/Container";
import TopThreeRank from "./TopThreeRank";
import RankTable from "./RankTable";

import { RanksDataProps } from "../../__mock__";

const WrapperContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1350px;
`;

// RankTable
export default function RankGroup(props: any) {
    const [topThree, setTopThreeRanks] = useState<RanksDataProps | []>([]);
    const [restRanks, setRestRanks] = useState<RanksDataProps | []>([]);

    // set top three and rest ranks
    useEffect(() => {
        console.log('rank props: ', props.rank);
        if (props.rank.length) {
            setTopThreeRanks(props.rank.splice(0, 3));
            setRestRanks(props.rank.splice(0, props.rank.length));
        }
    }, []);

    return (
        <Wrapper padding="2rem auto">
            <WrapperContainer>
                <TopThreeRank data={topThree} />
                <RankTable data={restRanks} />
            </WrapperContainer>
        </Wrapper>
    );
}