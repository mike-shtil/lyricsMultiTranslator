<template>
    <section class="home__container">
        <div>
          <md-whiteframe>
            <md-toolbar md-theme="blue">
              <span class="md-title">LYricS ScRaMbLe</span>
            </md-toolbar>
          </md-whiteframe>
            <textarea v-model="lyricsText" placeholder="INSERT YOUR SONG IN HERE ! !@"></textarea>
            <section class="translation-set__options">
                <label class="translation-set__option"
                v-for="set in translationSets">
                    <span>{{set.name}}</span>
                    <input type="radio" name="translationSet"
                    v-model="selectedTranslationSet">
                </label>
            </section>
            <button v-on:click="translateAction()">Translate!</button>
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
            };
        },
        methods: {
            send(){
                alert(translateService.getTranslation());
            },
            translateAction() {
                this.$store.dispatch('runTranslate', {
                    lyricsText: this.lyricsText,
                    selectedTranslationSet: this.selectedTranslationSet,
                    router: this.$router
                }
                );
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
