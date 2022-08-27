import type { MemberEntity } from "@/types";

export const companyMembersService = {
  async getMembersList(company: string): Promise<MemberEntity[]> {
    const url = `https://api.github.com/orgs/${company.toLocaleLowerCase()}/members`;
    const members = await fetch(url).then((response) => response.json());

    return members;
  },

  async getMemberDetails(
    login: MemberEntity["login"]
  ): Promise<MemberEntity | undefined> {
    const member = await fetch(`https://api.github.com/users/${login}`).then(
      (response) => response.json()
    );
    return member;
  },
};
