import axios from "axios";

export function asyncAll<T extends {}>(requests: Promise<T[]>[] = []) {
  return axios
    .all(requests)
    .then((resultArr) => {
      //  return data
      return resultArr;
    })
    .catch((error) => {
      console.log("error from asyncAll", error);
    });
}
