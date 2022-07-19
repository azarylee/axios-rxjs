import request from "../api";
import { of } from "rxjs";
import { take, catchError } from "rxjs/operators";

// import { formDataProps } from "../types";

export function getRanks() {
  return request.get("/ranks").pipe(
    take(1),
    catchError((err) => of(console.log("err: ", err)))
  );
}

// export function getIsValidEmailOrName(formData: formDataProps) {
//   return request({
//     url: "/checkValidation",
//     method: "POST",
//     data: formData
//   });
// }
