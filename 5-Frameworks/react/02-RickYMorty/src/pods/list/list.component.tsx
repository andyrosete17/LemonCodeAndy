import { MyContext } from "@/core/context/context";
import { Pagination, TextField } from "@mui/material";
import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { InfoEntity, MemberEntity } from "./list.vm";
import { FilterContainer, ListContainer, ListHeader } from "./styles";

interface Props {
  members: MemberEntity[];
  pageInfo: InfoEntity;
  changePage: (e, page) => void;
}

export const ListComponent: FC<Props> = (props) => {
  const { members, pageInfo, changePage } = props;
  const { character, setCharacter, navigationPage } =
    useContext(MyContext);
  return (
    <>
      <h2>Hello from List page</h2>
      <FilterContainer>
        <TextField
          id="outlined-basic"
          label="Filter By Character"
          variant="outlined"
          defaultValue={character}
          onChange={(e) => {
            setCharacter(e.target.value);
          }}
        />
      </FilterContainer>
      <ListContainer>
        <ListHeader>Avatar</ListHeader>
        <ListHeader>Name</ListHeader>
        <ListHeader>Status</ListHeader>
        <ListHeader>Specie</ListHeader>
        <ListHeader>Gender</ListHeader>
        {members.map((member) => (
          <>
            <img src={member.image} />
            <Link to={`/detail/${member.id}`}>{member.name}</Link>
            <span>{member.status}</span>
            <span>{member.species}</span>
            <span>{member.gender}</span>
          </>
        ))}
      </ListContainer>
      <Pagination
        count={pageInfo.pages}
        defaultPage={1}
        color="primary"
        page={navigationPage}
        onChange={changePage}
      />
    </>
  );
};
