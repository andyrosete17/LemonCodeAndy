import React, { FC, ReactNode } from "react";
import { LayoutCenter } from "../styles";

interface Props {
  children: ReactNode;
}

export const CenterLayout: FC<Props> = ({ children }) => (
  <LayoutCenter>{children}</LayoutCenter>
);
