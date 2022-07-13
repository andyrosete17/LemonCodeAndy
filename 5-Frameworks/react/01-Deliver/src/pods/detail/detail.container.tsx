import React, { FC } from "react";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { MyContextProvider } from "@/core/context/context";

interface Props {
  id: string;
}

export const DetailContainer: FC<Props> = (props) => {
  const { id } = props;
  console.log("el id que entra es", id);
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json));
  }, []);

  return <DetailComponent member={member} />;
};
