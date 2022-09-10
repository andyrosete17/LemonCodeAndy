import { ref } from "vue";
import type { Ref } from "vue";
import { companyMembersService } from "../services/companies";
import type { MemberEntity } from "@/types";

export default async function useMembersApi(companyName: string) {
  try {
    const members: Ref<MemberEntity[]> = ref([]);
    members.value = await companyMembersService.getMembersList(companyName);
    if (!members.value.length) {
      throw new TypeError("Company not found");
    }
    return { members };
  } catch (error) {
    throw new TypeError("Sorry an error has ocurred, try it later");
  }
 
}
