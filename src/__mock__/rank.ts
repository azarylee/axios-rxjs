import { mockInstance } from "../api/axiosSetup";

export const ranksData = [
  {
    id: 1,
    rank: 1,
    nickName: "John",
    mt4: 123456,
    profit: 249
  },
  {
    id: 2,
    rank: 2,
    nickName: "Jane",
    mt4: 234567,
    profit: 248
  },
  {
    id: 3,
    rank: 3,
    nickName: "Alice",
    mt4: 345678,
    profit: 247
  },
  {
    id: 4,
    rank: 4,
    nickName: "Bob",
    mt4: 456789,
    profit: 246
  },
  {
    id: 5,
    rank: 5,
    nickName: "James",
    mt4: 456789,
    profit: 246
  },
  {
    id: 6,
    rank: 6,
    nickName: "Leo",
    mt4: 456789,
    profit: 246
  },
  {
    id: 7,
    rank: 7,
    nickName: "Tim",
    mt4: 456789,
    profit: 246
  },
  {
    id: 8,
    rank: 8,
    nickName: "Cook",
    mt4: 456789,
    profit: 246
  },
  {
    id: 9,
    rank: 9,
    nickName: "Dan",
    mt4: 456789,
    profit: 246
  },
  {
    id: 10,
    rank: 10,
    nickName: "Eason",
    mt4: 456789,
    profit: 246
  },
  {
    id: 11,
    rank: 11,
    nickName: "Frank",
    mt4: 456789,
    profit: 246
  },
  {
    id: 12,
    rank: 12,
    nickName: "Gerry",
    mt4: 456789,
    profit: 246
  },
  {
    id: 13,
    rank: 13,
    nickName: "Harry",
    mt4: 456789,
    profit: 246
  },
  {
    id: 14,
    rank: 14,
    nickName: "Yoyo",
    mt4: 456789,
    profit: 246
  },
  {
    id: 15,
    rank: 15,
    nickName: "Jimmy",
    mt4: 456789,
    profit: 246
  },
  {
    id: 16,
    rank: 16,
    nickName: "Ketty",
    mt4: 456789,
    profit: 246
  },
  {
    id: 17,
    rank: 17,
    nickName: "Michael",
    mt4: 456789,
    profit: 246
  },
  {
    id: 18,
    rank: 18,
    nickName: "Nicholas",
    mt4: 456789,
    profit: 246
  },
  {
    id: 19,
    rank: 19,
    nickName: "Owen",
    mt4: 456789,
    profit: 246
  },
  {
    id: 20,
    rank: 20,
    nickName: "Petter",
    mt4: 456789,
    profit: 246
  }
];

export type RanksDataProps = typeof ranksData;
mockInstance.onGet("/ranks").reply(200, ranksData);
