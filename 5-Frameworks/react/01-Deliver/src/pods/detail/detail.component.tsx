import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberDetailEntity } from "./detail.vm";
import { MyContext } from "@/core/context/context";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: FC<Props> = (props) => {
  const { member } = props;
  const { company } = useContext(MyContext);

  const capitalizeFirstLetter = (text: string): string => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
  };

  console.log("companyName en details", company);
  return (
    <>
      <h2>Hello from {capitalizeFirstLetter(company)} detail page</h2>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.list}>Back to list page</Link>
    </>
  );
};
