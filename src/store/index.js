import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    myTodo: ["Intern", "fulltime", "parttime", "remote", "onsite"],
  },
  getters: {},
  mutations: {
    ADD_NAME(state, item) {
      if (item !== "") {
        state.myTodo.push(item);
      } else {
        alert("add some thing");
      }
    },
    DELETE_DATA(state, item) {
      let isSure = window.confirm("Are you sure");
      if (isSure) {
        state.myTodo.splice(item, 1);
      }
    },
    UPDATE_DATA(state, myObject) {
      const id = myObject.getIndex;
      const name = myObject.items;
      console.log(id, name);
      state.myTodo[id] = name;
      state.myTodo = [...state.myTodo];
    },
  },
  actions: {
    addtodo(context, item) {
      context.commit("ADD_NAME", item);
    },
    deletitem(context, item) {
      context.commit("DELETE_DATA", item);
    },
    updateitem(context, myObject) {
      context.commit("UPDATE_DATA", myObject);
    },
  },
  modules: {},
});
