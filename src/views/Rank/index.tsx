import React from "react";
import { useObservable } from "../../hooks";

// components
import RankGroup from "./RankGroup";

export default function RankSection(props: any) {
    const { change: changeRank, next: rankNext } = useObservable();
    
    changeRank.subscribe(value => console.log('Rank Group: ', value));

    return (
        <div>
            <RankGroup rank={props.rank}/>
        </div>
    );
}