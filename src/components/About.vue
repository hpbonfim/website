<template>
<v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          src="https://instagram.fbsb9-1.fna.fbcdn.net/vp/d4343a4c55fb655ec7968929488e4ee6/5BD36794/t51.2885-15/sh0.08/e35/s640x640/36545675_253009235285525_4861411690647912448_n.jpg"
          height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div>
              <h2>{{name}}</h2>
              <p>{{information}}</p>
              <br>
              <i>{{frase}}</i>
            </div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data () {
      return {
        name: 'Henrique Paulo Bonfim da Silva',
        information: 'Graduando em Sistemas de Informação >> FACOM >> UFMS',
        frase: '> "Determinação, coragem e auto-confiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho". - Dalai Lama'
      }
    }
  }
</script>

<style scoped>
h2 {
  color: #DDDDDD;
}
p {
  display: inline;
  color: #e6e6e6aa;
}
i {
  color: #DDDDDD;
}
</style>
