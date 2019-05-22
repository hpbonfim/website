import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: "AIzaSyA0PmCn5yS8NITikFS4wChcTn0cdGJacQM",
  authDomain: "vue-sketch-007.firebaseapp.com",
  databaseURL: "https://vue-sketch-007.firebaseio.com",
  projectId: "vue-sketch-007",
  storageBucket: "vue-sketch-007.appspot.com",
  messagingSenderId: "1026217390661"
})
export const db = app.database()
export const mensagensRef = db.ref('mensagens')