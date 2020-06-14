import ko from 'vee-validate/dist/locale/ko' // add

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    // ..
    dictionary: {
      messages: ko.messages, // add
      // ..
    }
  }),

  mounted () {
    this.$validator.localize('ko', this.dictionary) // en -> ko
  },
  // .. 
}

<v-snackbar
      v-model="sb.act"
    >
      {{ sb.msg }}
      <v-btn
        :color="sb.color"
        flat
        @click="sb.act = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
  data: () => ({
    sb: {
      act: false,
      msg: '',
      color: 'warning'
    },
  // ..
  methods: {
    pop (m, cl) {
      this.sb.act = true
      this.sb.msg = m
      this.sb.color = cl
    },
    // ..
</script>