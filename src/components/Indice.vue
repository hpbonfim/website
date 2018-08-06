<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-jumbotron>
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <h1 style="text-shadow:1px 1px 2px black" class="display-3">...</h1>
                <span class="subheading" style="text-shadow:1px 1px 1px black">
                  Página ainda em construção, em breve teremos mais novidades...
                </span>
                  <v-divider class="my-3"></v-divider>
                  <!--
                    <div class="title mb-3">Check out our newest features!</div>
                      <v-btn class="mx-0" large>
                      See more
                      </v-btn>
                  -->  
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
