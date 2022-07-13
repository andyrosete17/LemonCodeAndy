import React, { FC } from "react";
import { MemberDetailEntity, createDefaultMemberDetail } from "./detail.vm";
import { DetailComponent } from "./detail.component";
import { ApiCall } from "./api.details";

interface Props {
  id: string;
}

export const DetailContainer: FC<Props> = (props) => {
  const { id } = props;
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );

  const fetchAPI = async () => {
    const response = await ApiCall(id);
    setMember(response);
  };

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return <DetailComponent member={member} />;
};
