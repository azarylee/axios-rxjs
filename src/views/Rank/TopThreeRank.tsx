import React from "react";
import styled from "styled-components";

// types
import { RanksDataProps } from "../../__mock__/rank";
import { RankComponentProps } from "../../Types/index";

// constants
import Colors from "../../constants/Colors";

// RankComponentWrapper
type RankComponentWrapperProps = {
    bgFrom: string;
    bgTo: string;
};
const RankComponentWrapper = styled.div<RankComponentWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-width: 33.33%;
    margin-top: 2rem;

    img {
        flex: 1;
        width: 8rem;
        z-index: 1;
    }

    div {
        flex: 3;
        position: relative;
        right: 3rem;
        padding: 1rem 2rem 1rem 5rem;
        border-radius: 8px;
        background: linear-gradient(
            90deg,
            ${(props) => props.bgFrom},
            ${(props) => props.bgTo}
        );
        table {
            th {
                color: ${Colors.brandGreen};
            }

            tbody > tr {
                color: ${Colors.white};

                td {
                    padding: 1rem 2rem 0 0;
                    &:first-child {
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    @media (max-width: 992px) {
        img {
            width: 5rem;
        }

        div {
            right: 3rem;
            padding: 5px 5px 5px 3rem;
        }
    }
`;
// RankComponentWrapper

// RankComponent

function RankComponent(props: RankComponentProps) {
    const { name, img, profit, bgFrom, bgTo } = props;

    return (
        <RankComponentWrapper bgFrom={bgFrom} bgTo={bgTo}>
            <img src={img} alt="rank" />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>昵称</th>
                            <th>盈利 %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>
                                {profit.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "AUD",
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </RankComponentWrapper>
    );
}
// RankComponent

// FirstClass
const TopThreeRankWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;
type TopThreeRankProps = {
    data: RanksDataProps;
};
export default function TopThreeRank(props: TopThreeRankProps) {
    const { data } = props;

    function setImgnBg(type: string, index: number): string {
        switch (index) {
            case 0:
                if (type === "bgFrom") return Colors.darkYellow;
                return Colors.lightYellow;
            case 1:
                if (type === "bgFrom") return Colors.white;
                return Colors.lightBronze;
            case 2:
                if (type === "bgFrom") return Colors.lightBronze;
                return Colors.darkBronze;
            default:
                return "";
        }
    }

    return (
        <TopThreeRankWrapper>
            {data.length
                ? data.map((rank, index) => (
                      <RankComponent
                          img={setImgnBg("img", index)}
                          name={rank.nickName}
                          profit={rank.profit}
                          key={rank.id}
                          bgFrom={setImgnBg("bgFrom", index)}
                          bgTo={setImgnBg("bgTo", index)}
                      />
                  ))
                : ""}
        </TopThreeRankWrapper>
    );
}
// FirstClass