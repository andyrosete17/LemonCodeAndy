 
import type { MemberEntity } from './api.model';

export const getMemberCollection = (org: string): Promise<MemberEntity[]> =>
  fetch(`https://api.github.com/orgs/${org}/members`).then(response => response.json());
