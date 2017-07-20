<template>
    <div class="translate__container">
        <h1>Translate</h1>

        <div class="sourceLyricsDisplay">
            <div class="lyrics">
                {{lyricsText}}
            </div>
        </div>
        <div class="translationProgress">

        </div>
        <div class="resultPreview"></div>
        <button class="runAgainCta">Again</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'translate',
        data() {
            return {

            };
        },
        computed: mapState([
            'lyricsText',
            'selectedTranslationSet'
        ])
    };
</script>

<style scoped>

</style>
