import type * as vm from './members.vm';
import type * as am from './api/api.model';

export const mapMemberToVm = (member: am.MemberEntity): vm.MemberEntity => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
});

export const mapMemberCollectionToVm = (members: am.MemberEntity[]): vm.MemberEntity[] => {
  return members.map(mapMemberToVm);
};
