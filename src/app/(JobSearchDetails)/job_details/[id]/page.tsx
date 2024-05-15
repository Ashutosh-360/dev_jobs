import { ObjectId } from "mongoose";
import React, { FC } from "react";

interface Params {
  params: { id: string };
}

const page: FC<Params> = ({ params }) => {
  return <div>{params.id}</div>;
};
//
export default page;
