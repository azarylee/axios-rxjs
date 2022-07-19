import { useEffect } from "react";
// import { useObservable } from "./hooks";
import { getRanks } from "./api/requests/rankRequest";
import "./styles.css";

export default function App() {
  // const { change: changeRank, next: rankNext } = useObservable();
  useEffect(() => {
    const result = getRanks().subscribe((res: any) =>
      console.log("response:", res)
    );
  }, []);

  return (
    <div className="App">
      <h1>F1 Rank</h1>
    </div>
  );
}
