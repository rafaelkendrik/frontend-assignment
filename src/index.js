import '@/assets/styles/main.scss';
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

new Vue({
  render: createElement => createElement(HelloWorld),
  el: '#app'
});
