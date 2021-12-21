<template>
  <span @click="handleClick" class="container">
    <span class="button">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
    name: 'Button',
    // props: {
    //     type: {
    //       type: String,
    //       default: 'button'
    //     }
    // },
    methods: {
        handleClick(ev) {
          this.$emit('click', ev)
        } 
    }    
}
</script>

<style scoped>
.container {
  margin: 0 10px;
  padding: 0.1rem 1rem 0.1rem 1rem;
  transform: translate(-50%, -50%);
  border: 4px solid #884898;
  letter-spacing: 0.1rem;
  cursor: pointer;
  border-radius: 15px;
  transition: 0.6s;
}

.container:hover {
  box-shadow: 0 1px 30px 0 #884898 inset, 0 1px 10px 0 #884898,
              0 1px 30px 0 #884898 inset, 0 1px 10px 0 #884898;
}
</style>