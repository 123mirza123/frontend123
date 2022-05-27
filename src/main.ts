import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';

const app = createApp(App)

const connection = new HubConnectionBuilder()
  .withUrl('https://localhost:7025/chathub')
  .build();

app.use(router)
app.use(Notifications)
app.use(VueSignalR, { connection })

app.mount('#app')
