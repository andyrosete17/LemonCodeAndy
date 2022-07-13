import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "core";
import { MemberDetailEntity } from "./detail.vm";

interface Props {
  member: MemberDetailEntity;
}

export const DetailComponent: FC<Props> = (props) => {
  const { member } = props;

  const capitalizeFirstLetter = (text: string): string => {
    return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
  };

  return (
    <>
      <h2>{capitalizeFirstLetter(member.name)} detail page</h2>
      <p> Avatar</p>
      <img src={member.image} />
      <p> Id: {member.id}</p>
      <p> Name: {member.name}</p>
      <p> Status: {member.status}</p>
      <p> Specie: {member.species}</p>
      <p> Type: {member.type}</p>
      <p> Gender: {member.gender}</p>
      <Link to={routes.list}>Back to list page</Link>
    </>
  );
};
