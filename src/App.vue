<template>
  <v-app dark>
      <v-navigation-drawer scrollable mobile-break-point :hide-overlay="overlay" persistent :mini-variant="miniVariant" :clipped="clipped"
        v-model="drawer" enable-resize-watcher fixed app>
        <v-list>
            <v-list-tile-avatar>
            <img src="https://instagram.fbsb9-1.fna.fbcdn.net/vp/d4343a4c55fb655ec7968929488e4ee6/5BD36794/t51.2885-15/sh0.08/e35/s640x640/36545675_253009235285525_4861411690647912448_n.jpg" alt="Henrique" >
            </v-list-tile-avatar>
          </v-list>
        <v-list-tile-action-text>
          <v-flex dark text-xs-center white--text xs12>Full-Stack Development</v-flex>
        </v-list-tile-action-text>
        <v-list>
          <v-list-tile-avatar>
            <v-btn icon target="_blank" href="https://github.com/hpbonfim">
            <img src="@/assets/github.png" alt="Github" >
            </v-btn>
          </v-list-tile-avatar>
        </v-list>
          <v-list>
            <v-list-tile-avatar>
              <v-btn icon target="_blank" href="mailto:hp_bonfim@hotmail.com?Subject=Hello%20again">
               <img src="@/assets/email.png" alt="E-mail" >
              </v-btn>
            </v-list-tile-avatar>
          </v-list>
        <v-list-tile-action-text>
        <v-divider></v-divider>
        <v-flex dark text-xs-center white--text xs12>Social Network</v-flex>
        </v-list-tile-action-text>
        <v-list>
          <v-list-tile-avatar>
            <v-btn icon target="_blank" href="https://www.facebook.com/hpbonfim/">
              <img src="@/assets/facebook.png" alt="Facebook" >
            </v-btn>
          </v-list-tile-avatar>
        </v-list>
        <v-list>
          <v-list-tile-avatar>
            <v-btn icon target="_blank" href="+5567993434417">
              <img src="@/assets/wpp.png" alt="Facebook" >
            </v-btn>
          </v-list-tile-avatar>
        </v-list>
        <v-list>
          <v-list-tile-avatar>
            <v-btn icon target="_blank" href="https://www.linkedin.com/in/hpbonfim/">
              <img src="@/assets/linkedin.png" alt="LinkedIn" >
            </v-btn>
          </v-list-tile-avatar>
        </v-list>
        <v-list>
          <v-list-tile-avatar>
            <v-btn icon target="_blank" href="https://www.instagram.com/hpbonfim/">
              <img src="@/assets/instagram.png" alt="Instagram" >
            </v-btn>
          </v-list-tile-avatar>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar icon dense app :clipped-left="clipped" tabs>
        Clique:
        <v-btn icon @click="seta = !seta" @click.stop="drawer = !drawer">
          <v-icon v-if="seta">chevron_left</v-icon>
          <v-icon v-else>chevron_right</v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="500px">
          <v-btn slot="activator" icon>
            <v-badge color="green" left overlap>
              <v-icon slot="badge" dark small >message</v-icon>
              <v-icon>edit</v-icon>
            </v-badge>
          </v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">Oeee, Deixe uma mensagem para mim! :D</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="nome" box label="Nome:" hint="Digite seu nome e sobrenome." persistent-hint required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-text-field v-model="titulo" box label="Título:" hint="Exemplo: Declaração de Amor ao Henrique xD" required></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <v-textarea v-model="mensagem" label="Digite sua Mensagem:" auto-grow box  hint="Escreva algo legal! :D"></v-textarea>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="numero" box label="WhatsApp(Caso queira retorno):" hint="Exemplo: 11 9.8765-4321" persistent-hint required></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*Campo requerido</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" flat @click.native="dialog = false">Close</v-btn>
              <v-btn color="blue" flat @click="submitMessage()" @click.native="dialog = false">Enviar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-tabs slot="extension" v-model="tabs" fixed-tabs color="transparent">
          <v-tabs-slider></v-tabs-slider>
          <v-tab to="/" class="primary--text">
            <v-icon>home</v-icon>
          </v-tab>
          <v-tab to="/About" class="primary--text">
            <v-icon>account_box</v-icon>
          </v-tab>
          <v-tab to="/Contact" class="primary--text">
            <v-icon>messages</v-icon>
          </v-tab>
        </v-tabs>
      </v-toolbar>
      <v-content>
        <router-view>
        </router-view>
      </v-content>
      <v-footer dark height="auto">
        <v-card class="flex" flat tile>
          <v-flex dark text-xs-center white--text xs12>
              <strong class="subheading">Confira minhas redes sociais!</strong>
            <v-spacer/>
            <v-flex dark text-xs-center white--text xs12>
              <v-btn icon target="_blank" href="https://www.facebook.com/hpbonfim/">
                <img height="32" src="@/assets/facebook.png" alt="Facebook" >
              </v-btn>
              <v-btn small icon target="_blank" href="https://www.instagram.com/hpbonfim/">
                <img height="32" src="@/assets/instagram.png" alt="Instagram" >
              </v-btn>
              <v-btn small icon target="_blank" href="https://www.linkedin.com/in/hpbonfim/">
                <img height="32" src="@/assets/linkedin.png" alt="LinkedIn" >
              </v-btn>
              <v-btn small icon target="_blank" href="mailto:hp_bonfim@hotmail.com?Subject=Oi%20Henrique!">
                <img height="32" src="@/assets/email.png" alt="E-mail" >
              </v-btn>
            </v-flex>
            <v-divider></v-divider>
            Todos os Direitos Reservados
            <p><strong>Henrique Paulo Bonfim</strong>
            &copy;2018</p>
          </v-flex>
        </v-card>
      </v-footer>
  </v-app>
</template>

<script>
import {mensagensRef} from '../firebase'

export default {
  data: () => ({
    title: 'xD >>>',
    items: [
      {title: 'Inspire', linkpath: '/'},
      {title: 'Adicionar', linkpath: '/About'},
      {title: 'Buscar', linkpath: '/Contact'}
    ],
    tabs: null,
    dialog: false,
    seta: false,
    overlay: false,
    miniVariant: true,
    rightDrawer: true,
    clipped: false,
    drawer: false,
    fixed: false,
    nome: '',
    numero: '',
    titulo: '',
    mensagem: ''
  }),
  methods: {
    next () {
      alert('Mensagem enviada com sucesso')
    },
    submitMessage () {
      mensagensRef.push({
        name: this.nome,
        number: this.numero,
        title: this.titulo,
        text: this.mensagem
      })
      this.nome = ''
      this.numero = ''
      this.titulo = ''
      this.mensagem = ''
    },
    removeMessage (key) {
      mensagensRef.child(key).remove()
    },
    setEditMessage (key) {
      mensagensRef.child(key).update({edit: true})
    },
    cancelEditMessage (key) {
      mensagensRef.child(key).update({edit: false})
    },
    saveMessage (person) {
      const key = person['.key']
      mensagensRef.child(key).set({name: person.name, edit: false})
    }
  // addMensagem: function () {
  // const createdAt = new Date()
  // db.collection('mensagens').add({
  // name: this.nome,
  // number: this.numero,
  // title: this.titulo,
  // text: this.mensagem,
  // createdAt: createdAt
  // })
  // this.nome = ''
  // this.numero = ''
  // this.titulo = ''
  // this.mensagem = ''
  }
}
</script>