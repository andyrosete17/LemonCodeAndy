import React from "react";
import { Member } from "./member-row.model";

interface Props {
  item: Member;
}
export const MemberRow = (props: Props) => {
  const { item } = props;
  return (
    <React.Fragment key={item.id}>
      <img src={item.avatar_url} />
      <span>{item.id}</span>
      <span>{item.login}</span>
      <span>{item.url}</span>
    </React.Fragment>
  );
};
