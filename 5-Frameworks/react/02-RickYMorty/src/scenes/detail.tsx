import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { DetailContainer } from "@/pods/detail";

export const DetailPage: FC = () => {
  const { id } = useParams();
  return (
    <>
      <DetailContainer id={id} />
    </>
  );
};
