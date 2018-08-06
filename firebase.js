import {initializeApp} from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyAyOovAUY6lpiekx3VoQTgjurqJOfPmDhg',
  authDomain: 'webpagehp.firebaseapp.com ',
  databaseURL: 'https://webpagehp.firebaseio.com',
  projectId: 'webpagehp',
  storageBucket: 'webpagehp.appspot.com'
})
export const db = app.database()
export const mensagensRef = db.ref('mensagens')