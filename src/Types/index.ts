import { MouseEvent } from "react";

export type Action = (e: MouseEvent<HTMLDivElement>) => void;

export type ObjectProps<T> = {
    [key: string]: T;
};

export type RankProps = {
    id: number,
    rank: number,
    nickName: string,
    mt4: number,
    profit: number
}

export type RankComponentProps = {
    name: string;
    img: string;
    profit: number;
    bgFrom: string;
    bgTo: string;
};