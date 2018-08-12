<template>
 <v-container id="grid" fluid grid-list-sm tag="section">
    <v-layout row wrap>
      <v-flex tag="h1" class="headline" v-text="'Mensagens'"></v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
            <v-flex v-for="text of mensagens" v-bind:key="text['.key']">
              <v-card flat color="blue-grey">
                <div>
                  <li>
                      Nome: <b>{{text.name}}</b><br>
                      Título: <p>{{text.title}}</p>
                      <br>Mensagem: <i>{{text.text}}</i>
                  </li>
                </div>
              </v-card>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  <!--
  <v-container>
    <div>
      <ul>
        <v-card dark text-xs-center white--text xs12 flex d-flex sm7>
          <li v-for="text of mensagens" v-bind:key="text['.key']">
          <p v-text="'Enviado por: '">{{text.name}}</p>
          <p>></p>
          <p v-text="teste"></p>
          <p>{{text.createdIn}}</p>
          </li>
        </v-card>
      </ul>
    </div>
  </v-container>
  -->
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

<style scoped>
p {
  display: inline;
  color: #e6e6e6aa;
}
i {
  color:#cccccc;
}
b {
  color:  #b9b9b983;
}
ul {
  list-style-type: 10px;
  padding: 5px;
}
div{
  padding: 5px;
  display: inline-block;
}
li{
  display: inline-block;
  color: #000000;
}

</style>