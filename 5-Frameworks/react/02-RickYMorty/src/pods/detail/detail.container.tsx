import React, { FC } from "react";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { MyContextProvider } from "@/core/context/context";

interface Props {
  id: string;
}

export const DetailContainer: FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        if (!response.ok) {
          console.log(response.status);
        } else {
          return response.json();
        }
      })
      .then((json) => setMember(json));
  }, []);

  return <DetailComponent member={member} />;
};
