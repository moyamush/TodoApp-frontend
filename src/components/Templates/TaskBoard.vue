<template>
  <div class="board">
    <h2>グループ名: {{ this.$store.state.Group[this.$store.state.currentGroupID - 1].name }}</h2>

    <br>
    <Button @click="openModal">create</Button>
    <br><br>
    <CreateTask v-show="showContent"
                @from-child="closeModal"
                @create="this.$store.dispatch('getCurrentGroupTasks')"/>
    <TaskCard v-for="task in this.$store.state.GroupTasks" :key="task.id"
     :task="task"
     class="card-position" />
  </div>
</template>

<script>
import Button from '../Atoms/Button.vue'
import TaskCard from '../Molecules/TaskCard.vue'
import CreateTask from '../Molecules/CreateTask.vue'
export default {
    name: 'TaskBoard',
    data() {
      return {
        showContent: false
      }
    },
    components: {
        Button,
        TaskCard,
        CreateTask,
    },
    methods:{
        openModal: function() {
            this.showContent = true
        },
        closeModal: function() {
            this.showContent = false
        }
    },
    created() {
        
        this.$store.dispatch('getCurrentGroupTasks')
    },
}
</script>

<style>
.board {
  position: relative;
}
.card-position {
  margin-left: 23%;
}
</style>