import * as apiModel from './api-model';
import * as viewModel from './view-model';

export const mapMemberListFromApiToVM = (
  members: apiModel.Member[]
): viewModel.Member[] =>
  Array.isArray(members)
    ? members.map((member) => mapMemberFromApiToVm(member))
    : [];

const mapMemberFromApiToVm = (member: apiModel.Member): viewModel.Member => ({
  id: member.id.toString(),
  login: member.login,
  avatarUrl: member.avatar_url,
});
