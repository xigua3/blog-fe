
import Vue from 'vue'; 
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
state:{
  token:window.sessionStorage.getItem('token'),
  username:window.sessionStorage.getItem('username')
},
mutations:{
SET_TOKEN:(state,data)=>{
  state.token=data
  window.sessionStorage.setItem('token',data)
},
 GET_USER:(state,data)=>{
   state.username=data
   window.sessionStorage.setItem('username',data)
 }
} 
})
