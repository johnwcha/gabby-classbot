<template>
  <div>
    <v-card-actions class="mx-0 px-0">
        <div v-if="listening">
            <v-img
            :src="require(`../static/mic-animate.gif`)"
            />
        </div>
        <div v-else>
            <v-img
            :src="require(`../static/mic.gif`)"
            />
        </div>
    <v-text-field
        v-model="runtimeTranscription"
        label="Enter message"
        type="text"
        no-details
        outlined
        append-outer-icon="mdi-send"
        @keyup.enter="sendMsg"
        @click:append-outer="sendMsg"
        hide-details
    />
    </v-card-actions>
  </div>
</template>

<script>
if (process.browser) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = SpeechRecognition ? new SpeechRecognition() : false
  recognition.continuous = true
}

export default {
  name: 'Speech2Text',
  // lang: 'en-US' cmn-Hans-CN
  props: {
    lang: {
      type: String,
      default: 'en-US'
    }
  },
  data () {
    return {
      error: false,
      speaking: false,
      listening: false,
      runtimeTranscription: '',
      sentences: []
    }
  },
  methods: {
    sendMsg () {
      if (this.runtimeTranscription === '') { return }
      // recognition.abort()
      this.$emit('speechend', {
        text: this.runtimeTranscription
      })
      this.runtimeTranscription = ''
    //   recognition.start()
    }
  },
  mounted () {
    // this.checkCompatibility()
  }
}

</script>

<style>

.grid-parent {
  display: grid;
  grid-template-columns: 0fr 1fr
}

</style>
