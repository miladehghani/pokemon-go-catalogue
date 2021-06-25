import { FC } from "react";

export interface RouteType {
  path: string;
  exact?: boolean;
  component: FC;
}
