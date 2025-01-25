import React from "react";
import { AppContextWrapper } from "./AppContext/AppContextWrapper";

type Props = {
  children: React.ReactNode;
};
export default function ContextCombiner(props: Props): JSX.Element {
  return (
    <AppContextWrapper>
      {props.children}
    </AppContextWrapper>
  );
}