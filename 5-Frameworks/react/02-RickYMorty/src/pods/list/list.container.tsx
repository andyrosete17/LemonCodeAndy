import { MyContext } from "@/core/context/context";
import React, { FC, useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ApiCall } from "./api.list";
import { ListComponent } from "./list.component";
import { createDefaultInfoEntity, InfoEntity, MemberEntity } from "./list.vm";

export const ListContainer: FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [pageInfo, setPageInfo] = useState<InfoEntity>(
    createDefaultInfoEntity()
  );

  const { character, navigationPage, setNavigationPage } =
    useContext(MyContext);
  const [debouncedCharacterFilter] = useDebounce(character, 1000);

  const onChangePageHandle = (e, page) => {
    setNavigationPage(page);
  };

  const fethAPI = async () => {
    const response = await ApiCall(character, navigationPage);
    setPageInfo(response.info);
    setMembers(response.results);
  };

  useEffect(() => {
    fethAPI();
  }, [debouncedCharacterFilter, navigationPage]);

  return (
    <ListComponent
      members={members}
      pageInfo={pageInfo}
      changePage={onChangePageHandle}
    />
  );
};
