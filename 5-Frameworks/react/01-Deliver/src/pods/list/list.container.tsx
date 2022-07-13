import { MyContext, MyContextProvider } from "@/core/context/context";
import React, { FC, useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";

export const ListContainer: FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { company, setCompany } = useContext(MyContext);
  const [debouncedCompanyFilter] = useDebounce(company, 1000);
  useEffect(() => {
    const url = `https://api.github.com/orgs/${debouncedCompanyFilter.toLocaleLowerCase()}/members`;
    fetch(url)
      .then((response) => response.json())
      .then(setMembers);
  }, [debouncedCompanyFilter]);

  useEffect(() => {
    console.log('se cambia la company del context con valor', company)
  }, [company]);

  return (
    <ListComponent
      members={members}
    />
  );
};
