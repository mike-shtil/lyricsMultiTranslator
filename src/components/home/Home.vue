<template>
  <div>
    <h1>Home</h1>
    <textarea  v-model="song"  placeholder="INSERT YOUR SONG IN HERE ! !@"></textarea>
    <button  v-on:click="send">send now!</button>
  </div>
</template>

<script>
    export default {
      name: 'home',
      data() {
        return {
          song: '',
        };
      },
      methods: {
          send(){

              alert(this.song);
          }
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
