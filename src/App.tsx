import { useEffect, useState } from "react";
import { useObservable } from "./hooks";
import { getRanks } from "./api/requests/rankRequest";
import "./styles.css";

// context
import {
  LanguageContext,
  LanguageContextProps
} from "./context/languageContext";

import Rank from "./views/Rank";

export default function App() {
  const { change: changeRank, next: rankNext } = useObservable();
  const [lang, setLang] = useState({ language: "en" } as LanguageContextProps);
  const [ranks, setRanks] = useState([] as any);

  const rankSubscribe$ = changeRank.subscribe({
    next: (value) => {
      if (value) {
        getRanks().subscribe((res: any) => {
          setRanks(res);
        });
      } else {
        console.log("aaa");
        setRanks([
          {
            id: 1111,
            rank: 0,
            nickName: "ABCD",
            mt4: 2123,
            profit: 9000
          }
        ]);
      }
    },
    error: (error) => console.log("error: ", error),
    complete: () => console.log("completed")
  });
  useEffect(() => {
    rankNext(false);
    return () => {
      rankSubscribe$.unsubscribe();
    };
  }, []);

  return (
    <LanguageContext.Provider value={lang}>
      <div className="App">
        <button
          onClick={() => {
            if (lang.language === "en") {
              rankNext(true);
              setLang({ language: "中文" });
            } else {
              rankNext(false);
              setLang({ language: "en" });
            }
          }}
        >
          {lang.language}
        </button>
        <h1>F1 Rank</h1>
        <Rank rank={ranks} />
        <ul>
          {ranks.length
            ? ranks!.map((item: any) => (
                <li key={item.id}>
                  {item.rank} - {item.nickName} - {item.profit}
                </li>
              ))
            : ""}
        </ul>
      </div>
    </LanguageContext.Provider>
  );
}
