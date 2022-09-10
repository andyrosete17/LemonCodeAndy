<template>
    <div class="grid">
        <div>
            <img :src="member.avatar_url" alt=""  class="member-image"/>
        </div>
        <div v-if="member">
            <div class="member-details">
                <p>User Login:</p>
                <h3>
                    {{ member.login }}
                </h3>
            </div>
            <div class="member-details">
                <p>User email:</p>
                <h3 v-if="member.email">
                    {{ member.email }}
                </h3>
                <h3 v-else>
                    -
                </h3>
            </div>
            <div class="member-details">
                <p>User Bio:</p>
                <h3 v-if="member.bio">
                    {{ member.bio }}
                </h3>
                <h3 v-else>
                    -
                </h3>
            </div>
            <div class="member-details">
                <p>User Organization:</p>
                <h3 v-if="member.organizations_url">
                    {{ member.organizations_url }}
                </h3>
                <h3 v-else>
                    -
                </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { RouteLocation } from 'vue-router'
import type { MemberEntity } from '@/types'
import { companyMembersService } from '@/services/companies'


export default defineComponent({
    components: {
    },
    data: () => ({
        member: {} as MemberEntity,
    }),
    computed: {
        login(): string {
            return String((this.$route as RouteLocation).params.login)
        },
    },
    created() {
        companyMembersService
            .getMemberDetails(this.login)
            .then((member: MemberEntity | undefined) => {
                if (member) {
                    this.member = member
                }
            })
    },
})
</script>
