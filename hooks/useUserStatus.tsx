import { useEffect, useState } from "react";
import { asyncAll, getData } from "../request";
import { AsyncStatus, UserInfo } from "../types";

import { timeoutPromise } from "../utils/lib";

export const useUserStatus = (data: UserInfo[]) => {
  const [status, setStatus] = useState<AsyncStatus>("idle");
  const [value, setValue] = useState<UserInfo[]>(data);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setStatus("pending");
        const tempRes = await asyncAll<UserInfo>([
          timeoutPromise(5000),
          getData<UserInfo>("users"),
        ]);
        setValue(tempRes ? tempRes[1] : []);
        setStatus("success");
      } catch (error) {
        console.log(`error`, error);
        setStatus("error");
      }
    };
    fetchUsers();
  }, []);
  return { status, value };
};
