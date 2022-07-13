import { MyContext } from "@/core/context/context";
import React, { FC, useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ListComponent } from "./list.component";
import { createDefaultInfoEntity, InfoEntity, MemberEntity } from "./list.vm";

export const ListContainer: FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [pageInfo, setPageInfo] = useState<InfoEntity>(
    createDefaultInfoEntity()
  );

  const { character, setCharacter, navigationPage, setNavigationPage } =
    useContext(MyContext);
  const [debouncedCharacterFilter] = useDebounce(character, 1000);

  const apiCall = () => {
    const url = `https://rickandmortyapi.com/api/character/?name=${character}&page=${navigationPage}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        } else {
          return response.json();
        }
      })
      .then((response) => {
        setPageInfo(response.info);
        setMembers(response.results);
      });
  };

  const onChangePageHandle = (e, page) => {
    setNavigationPage(page);
  };

  useEffect(() => {
    apiCall();
  }, [debouncedCharacterFilter, navigationPage]);

  return (
    <ListComponent
      members={members}
      pageInfo={pageInfo}
      changePage={onChangePageHandle}
    />
  );
};
