<template>
  <v-container>
    <div>
        

      <ul>
        <li v-for="text of mensagens" v-bind:key="text['.key']">
        <v-card dark text-xs-center white--text xs12 flex d-flex sm7>
          <p v-text="'Enviado por: '">{{text.name}}</p>
          <p>></p>
          <p v-text="teste"></p>
          <p>{{text.createdIn}}</p>
        </v-card>

          </li>
      </ul>
    </div>
  </v-container>
</template>

<script>
import {mensagensRef} from '../../firebase'

export default {
  data () {
    return {
      teste: 'criado em:'
    }
  },
  firebase: {
    mensagens: mensagensRef

  }
}
</script>