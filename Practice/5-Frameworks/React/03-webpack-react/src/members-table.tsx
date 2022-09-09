import React, { useEffect, useState } from "react";
import { Member } from "./member-row.model";
import { MemberRow } from "./mermer-row";

interface Props {
  org: string;
}

export const MembersTable = (props: Props) => {
  const { org } = props;

  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`).then((response) => {
      response
        .json()
        .then((data) => {
          setMembers(data);
        })
        .catch();
    });
  }, []);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Login</span>
      <span className="header">Url</span>
      {members.length > 0 &&
        members.map((item) => <MemberRow item={item} key={item.id} />)}
    </div>
  );
};
