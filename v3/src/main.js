import Vue from 'vue';
import $ from 'jquery';
import App from './App.vue';

$.ajax({
    method: "POST",
    url: "https://script.google.com/macros/s/AKfycby6NDw00rmTNAuDztLXknMitcP9y5bHIUWyvR-cNIszhrbe7aPx/exec",
    data: {
        date:"",
        store:"",
        category:"",
        price:"",
        type:"",
        method:"",
        comment:"",
        sms:"테스트"
    }
}).done(function( msg ) {
    console.log("사용내역을 저장 되었습니다")
    // window.location.reload();
});

new Vue({
  el: '#app',
  render: h => h(App)
});