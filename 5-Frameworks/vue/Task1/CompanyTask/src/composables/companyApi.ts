import { ref } from "vue";
import type { Ref } from "vue";
import { companyMembersService } from "../services/companies";
import type { MemberEntity } from "@/types";

export default async function useMembersApi(companyName: string) {
  const members: Ref<MemberEntity[]> = ref([]);
  members.value = await companyMembersService.getMembersList(companyName);
  return { members };
}
