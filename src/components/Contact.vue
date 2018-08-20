<template>
 <v-container id="grid" fluid grid-list-sm tag="section">
    <v-flex tag="h1" class="headline" v-text="'Mensagens'"></v-flex>
      <v-flex v-for="text of mensagens" v-bind:key="text['.key']">
        <v-card flat color="blue-grey">
          <div>
            <li>
                Nome: <b>{{text.name}}</b>
                <br>Mensagem: <i>{{text.text}}</i>
            </li>
          </div>
        </v-card>
      </v-flex>
  </v-container>
</template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>
  

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