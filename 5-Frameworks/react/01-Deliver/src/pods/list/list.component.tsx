import { MyContext } from "@/core/context/context";
import { Button, TextField } from "@mui/material";
import React, { FC, useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import { FilterContainer, ListContainer, ListHeader } from "./styles";

interface Props {
  members: MemberEntity[];
}

export const ListComponent: FC<Props> = (props) => {
  const { members } = props;
  const { company, setCompany } = useContext(MyContext);
  const [inputCompany, setInputCompany] = useState(company);

  return (
    <>
      <h2>Hello from List page</h2>
      <FilterContainer>
        <TextField
          id="standard-basic"
          label="Company"
          defaultValue={company}
          variant="standard"
          onChange={(e) => setInputCompany(e.target.value)}
        />
        <Button variant="contained" onClick={() => setCompany(inputCompany)}>
          Filter
        </Button>
      </FilterContainer>
      <ListContainer>
        <ListHeader>Avatar</ListHeader>
        <ListHeader>Id</ListHeader>
        <ListHeader>Name</ListHeader>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </ListContainer>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
