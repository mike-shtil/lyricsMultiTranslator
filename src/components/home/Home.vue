<template>
    <section class="home__container">
        <div>
            <h1>Home</h1>
            <textarea v-model="song" placeholder="INSERT YOUR SONG IN HERE ! !@"></textarea>
            <button v-on:click="send">send now!</button>
        </div>
        <div class="">
            <table class="table">
                <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Assigned To</th>
                    <th>Priority</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in projects">
                    <td>{{item.name}}</td>
                    <td>{{item.assignedTo}}</td>
                    <td>{{item.priority}}</td>
                    <td><i v-if="item.completed" class="fa fa-check"></i></td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

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
        },
        computed: mapState([
            'projects'
        ])
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
