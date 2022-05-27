<script setup>
  import { notify } from "@kyvg/vue3-notification";
  import { useSignalR } from '@dreamonkey/vue-signalr';
  import axios from 'axios';

  const signalr = useSignalR();

async function onPrimaryClick() {
  notify({
    title: "Primary works! ",
  });

    signalr.invoke('SendMessage', 'Rule', 'Slusaj vamo');

}
async function onSuccessClick() {

  const response = await axios.post('https://localhost:7025/api/vendor/create', {
    name: "Rusmir",
    position: 'FrontEnd',
    age: '20',
  });

}
async function onDangerClick() {
  notify({
    title: "Danger works! ",
    type: 'error',
  });
}

signalr.on('ReceiveMessage', (user, message) => {
  alert(`${user} - ${message}`);
});
</script>

<template>
  <button @click="onPrimaryClick()" type="button" class="btn btn-primary">Primary</button>
  <button @click="onSuccessClick()" type="button" class="btn btn-success">Success</button>
  <button @click="onDangerClick()" type="button" class="btn btn-danger">Danger</button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  button {
    margin: 20px;
  }
}
</style>