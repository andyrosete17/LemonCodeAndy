import { routes } from "@/cores/router/routes";
import { AppLayout } from "@/layout/app.layout";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListScene = () => {
  //   console.log(window.location);
  //Si queremos leer cosas de los queryParams
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // console.log("PARAM PAGE: ", params.get("page"));
  const [members, setMembers] = useState<MemberEntity[]>([]);
  useEffect(() => {
    fetch(`https://api.github.com/orgs/lemoncode/members`)
      .then((response) => response.json())
      .then(setMembers);
  }, []);

  return (
    <AppLayout>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </Fragment>
        ))}
      </div>
      <Link to="/">Go to login</Link>
    </AppLayout>
  );
};
