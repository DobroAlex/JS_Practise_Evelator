<template>
  <div></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  beforeMount () {
    this.$router.push({name: 'ElevatorPage'})
  }
}
</script>
