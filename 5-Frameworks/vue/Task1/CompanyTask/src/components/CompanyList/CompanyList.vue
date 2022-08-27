
<template>
	<section>
		<div class="filter">
			<input type="text" v-model="membersStore.filterValue" />
			<button @click="searchCompany">Search Company</button>
		</div>
		<ul class="member-list">
			<li v-for="member in membersStore.memberItems" :key="member.id">
				<!-- <a ></a> -->
				<router-link :to="`/detail/${member.login}`">
					<article class="grid member-container card">
						<div>
							<img :src="member.avatar_url" alt="" />
						</div>
						<div class="member-container__content">
							<div class="member-details">
								<p>User Login:</p>
								<h2>
									{{ member.login }}
								</h2>
							</div>
							<div class="member-details">
								<p>User Id:</p>
								<h2>
									{{ member.id }}
								</h2>
							</div>
						</div>
					</article>
				</router-link>
			</li>
		</ul>

	</section>
</template>


<script lang="ts">
import useMembersApi from '@/composables/companyApi';
import { useMembersStore } from '@/stores/members'


export default {
	name: 'CompanyList',
	components: {
	},
	setup() {
		const membersStore = useMembersStore();

		const searchCompany = async () => {
			const { members } = await useMembersApi(
				membersStore.filterValue.toLocaleLowerCase());
			membersStore.memberItems = members.value;
		}
		return {
			searchCompany,
			membersStore
		}
	}
}

</script>

<style lang="scss">
.member-list {
	padding-top: 15px;

	li {
		margin-bottom: 2em;
	}
}

.member-container {
	align-items: flex-start;
	grid-template-columns: 210px 1fr 100px;

	img {
		width: 90px;
		border-radius: 5em;
	}
}

.filter {
	padding: 15px 0px 10px 55px;
	display: flex;
	gap: 20px;

	button{
		padding-left: 5px;
		border-radius: 05em;
		background-color: lightgray;
	}

	input{
		border-radius: 0.5em;
	}
}
</style>