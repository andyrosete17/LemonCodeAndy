import type { MemberEntity } from "@/types";
import type { PiniaCustomStateProperties } from "pinia";
import { defineStore } from "pinia";

interface MemberState {
  memberItems: MemberEntity[];
  filterValue: string;
}

export type state = MemberState & PiniaCustomStateProperties<MemberState>;

export const useMembersStore = defineStore<"members", MemberState>({
  id: "members",
  state: () => ({
    memberItems: [],
    filterValue: "Lemoncode",
  }),
  getters: {},
  actions: {},
});
