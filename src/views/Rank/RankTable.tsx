import React, { MouseEvent, useState, useEffect } from "react";
import styled from "styled-components";

// constants
import Colors from "../../constants/Colors";
import Styles from "../../constants/Styles";

// types
import { RanksDataProps } from "../../__mock__";

// components
import Tabs from "../../components/Tabs";

// RankNumberTable
const TableCustomizedWrapper = styled.div`
    border-radius: ${Styles.tableRadius};
    border: 1px solid ${Colors.white};
    padding: 1rem 5rem;
    margin: 0 2rem;

    table {
        margin: 0 auto;

        th,
        td {
            color: ${Colors.white};
            text-align: center;
            padding: 1rem 0;
        }

        th {
            &:first-child {
                font-size: 22px;
                font-weight: 500;
            }
        }
    }
`;

type RankTableProps = {
    data: RanksDataProps;
};
function RankNumberTable(props: RankTableProps) {
    const { data } = props;
    return (
        <TableCustomizedWrapper className="rankNumberTable">
            <table>
                <thead>
                    <tr>
                        <th>排名</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </TableCustomizedWrapper>
    );
}
// RankNumberTable

// RankContentTable
const RankContentWrapper = styled(TableCustomizedWrapper)`
    padding: 0;
    flex: 1;

    table {
        width: 100%;

        thead {
            tr {
                th {
                    background-color: ${Colors.brandGreen};
                    color: ${Colors.textColor};
                    &:first-child {
                        display: none;
                        font-size: inherit;
                        font-weight: bolder;
                    }

                    &:nth-child(2) {
                        border-top-left-radius: 8px;
                    }

                    @media (max-width: 992px) {
                        &:first-child {
                            border-top-left-radius: 8px;
                            display: block;
                        }

                        &:nth-child(2) {
                            border-top-left-radius: 0;
                        }
                    }
                    &:last-child {
                        border-top-right-radius: 8px;
                    }
                }
            }
        }
        tbody {
            tr {
                td {
                    &:first-child {
                        display: none;
                    }

                    @media (max-width: 992px) {
                        &:first-child {
                            display: block;
                        }
                    }
                    &:nth-child(3) {
                        color: ${Colors.brandGreen};
                    }
                }
            }
        }
    }
`;

function RankContentTable(props: RankTableProps) {
    const { data } = props;

    return (
        <RankContentWrapper>
            <table>
                <thead>
                    <tr>
                        <th>排名</th>
                        <th>昵称</th>
                        <th>MT4</th>
                        <th>盈利 %</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.rank}</td>
                            <td>{item.nickName}</td>
                            <td>{item.mt4}</td>
                            <td>
                                {item.profit.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "AUD",
                                })}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </RankContentWrapper>
    );
}

// RankTable
const RankTableWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 2rem 0;
    justify-content: center;
    align-items: stretch;

    @media (max-width: 992px) {
        width: 95%;
        .rankNumberTable {
            display: none;
        }
    }
`;
export default function RankTable(props: RankTableProps) {
    const { data } = props;
    const [currentRanks, setCurrentRanks] = useState<RanksDataProps | []>([]);
    const [activeKey, setActiveKey] = useState<number>(0);

    useEffect(() => {
        if (data.length) {
            setCurrentRanks(data.slice(0, 11));
        }
    }, [data]);

    // change tab and set new data
    useEffect(() => {
        setCurrentRanks(data.slice(0, 11));
        if (activeKey) {
            setCurrentRanks(data.slice(11));
        }
    }, [activeKey]);

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget) {
            setActiveKey(Number(e.currentTarget.dataset.tabindex));
        }
    };

    return (
        <RankTableWrapper>
            <RankNumberTable data={currentRanks} />
            <RankContentTable data={currentRanks} />
            <Tabs onClick={handleClick} keyValue={activeKey} />
        </RankTableWrapper>
    );
}