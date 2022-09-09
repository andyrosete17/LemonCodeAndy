import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailsEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}
export const DetailsScene = () => {
  const { login } = useParams();
  const [member, setMember] = useState<MemberDetailsEntity>();
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setMember);
  }, [login]);

  return member ? (
    <>
      <h3>Member {member.name}</h3>
      <p>{member.id}</p>
      <p>{member.login}</p>
      <p>{member.company}</p>
      <p>{member.bio}</p>
      <Link to="/list">Go to list</Link>
    </>
  ) : (
    <>Loading</>
  );
};
