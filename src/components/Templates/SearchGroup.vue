<template>
  <div>
    <p>test</p>
    <form @submit.prevent="join_group">
      <p>Search Group</p>
      <div> {{ this.$store.state.currentGroupID }} </div>
      <textarea
        v-model="joinGroupID"
        class="form-control"
        placeholder="グループIDを入力"
        rows="1"
      ></textarea>
      <button>
        Join Group
      </button>
    </form>
  </div>
</template>

<script>
import Button from '../Atoms/Button.vue'
export default {
	name: "SearchGroup",
	components: {
		Button
	},
	data() {
		return {
			joinGroupID: null
		}
	},
	methods: {
		join_group() {
      console.error("search")
			this.$store.dispatch('joinGroup', {joinGroupID: this.joinGroupID})
		}
	},
}
</script>

<style>

</style>