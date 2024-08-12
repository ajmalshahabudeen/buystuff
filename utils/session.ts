"use server";

import { auth } from "@/auth";

let a = 0;
export const GetSession = async () => {
  a += 1;
  const session = await auth();
  console.log("GetSession", session);
  console.log("Session called " + a + " times");
  return session;
};
