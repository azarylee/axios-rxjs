import { Subject } from "rxjs";

export const useObservable = () => {
  const subj = new Subject<boolean>();

  const next = (value: boolean): void => {
    subj.next(value);
  };

  return { change: subj.asObservable(), next };
};
