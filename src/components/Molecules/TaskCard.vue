<template>
<div class="card card-skin">
  <div class="card_imgframe">
    <p>タスク名: {{ task.taskname }}</p>
    <p>作成者: {{ task.user }}</p>
    <p>締め切り: {{ task.deadline_at }}</p>
    <Button @click="openModal">Edit</Button>
    <EditTask v-show="showContent"
              @from-child="closeModal"
              @edit="this.$store.dispatch('getCurrentGroupTasks')"
              :task_id="task.id"
              :prev_taskname="task.taskname" /> 
    <Button @click="deleteTask(task.id)">Delete</Button>
  </div>  
</div>
</template>

<script>
import Button from '../Atoms/Button.vue'
import EditTask from './EditTask.vue'
export default {
    name: 'TaskCard',
    data() {
        return {
            showContent: false  
        }
    },
    components: {
        Button,
        EditTask
    },
    props:{
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        openModal: function() {
            this.showContent = true
        },
        closeModal: function() {
            this.showContent = false
        },
        deleteTask(task_id) {
            this.$store.dispatch('getCurrentGroupTasks')
            this.$store.dispatch('deleteTask', {task_id: task_id})
            this.$store.dispatch('getCurrentGroupTasks')
        }
    }
}
</script>

<style>
.card {
  width: 55%;
  margin-bottom: 1em;
}
.card-skin{
  overflow: hidden;
  border-radius: 15px;
  border-top: solid 1px black;
  border-left: solid 1px #884898;
  border-right: solid 4px #884898;
  border-bottom: solid 4px #884898;
}

.card_imgframe {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}
</style>