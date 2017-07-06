<template>
    <section class="home__container">
        <div>
          <md-whiteframe>
            <md-toolbar md-theme="blue">
              <span class="md-title">LYricS ScRaMbLe</span>
            </md-toolbar>
          </md-whiteframe>
            <textarea v-model="song" placeholder="INSERT YOUR SONG IN HERE ! !@"></textarea>
            <section class="translation-set__options">
                <label class="translation-set__option"
                v-for="set in translationSets">
                    <span>{{set.name}}</span>
                    <input type="radio" name="translationSet">
                </label>
            </section>
            <button v-on:click="send">Translate!</button>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import TranslateService from '../../translate.service';

    const translateService = new TranslateService();

    export default {
        name: 'home',
        data() {
            return {
                song: '',
            };
        },
        methods: {
            send(){
                alert(translateService.getTranslation());
            },
            translateAction() {
                this.$store.dispatch('RUN_TRANSLATE')
            }
        },
        computed: mapState([
            'translationSets'
        ])
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
