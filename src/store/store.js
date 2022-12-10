import Vuex from "vuex"
import Vue from "vue"

Vue.use(Vuex);

export const store =new Vuex.Store({

    state:{
        token:"",
        datos:{},
        clientes:[],
        setup:"",
    },

    mutations:{
        setToken(state,value){
            state.token=value
        },
        setDatos(state,value){
            state.datos=value
        },
        setClientes(state,value){
            state.clientes=value
        },
        setFuncionarios(state,value){
            state.funcionarios=value
        },
        setSetUp(state,value){
            state.setup=value
        },
        
        
    },

    actions:{
        setToken(context,value){
            context.commit("setToken",value)
        },
        setDatos(context,value){
            context.commit("setDatos",value)
        },
        setClientes(context,value){
            context.commit("setClientes",value)
        },
        setFuncionarios(context,value){
            context.commit("setFuncionarios",value)
        },
        setSetUp(context,value){
            context.commit("setSetUp",value)
        },
        
    }

})