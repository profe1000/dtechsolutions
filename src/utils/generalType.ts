import { ReactNode } from "react";

export type IList = {
  image?: string;
  title?: string;
  subTitle?: string;
  caption?: string;
  link?: string;
  linkTitle?: string;
  value?: number;
  content?:ReactNode
};
