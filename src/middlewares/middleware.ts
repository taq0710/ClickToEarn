import { getItemLocalStorage } from "@/utils/localStorageUtil";
import { NextApiRequest, NextApiResponse } from "next";

export function isLoggedIn(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const token = getItemLocalStorage("accesstoken");
  if (token) {
    return next();
  } else {
    return res.redirect("/login");
  }
}
