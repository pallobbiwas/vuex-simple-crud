<template>
  <div class="hello">
    <h1>My crud todo app</h1>
    <hr />
    <input v-model="name" type="text" />
    <button @click="addtodo(name)">Add my todo</button>
    <div class="margin-top flex1">
      <div class="parentflex">
        <div>
          <div class="flex" v-for="(todo, index) in myData" :key="index">
            <h2>{{ todo }}</h2>
            <button @click="deletitem(index)" class="buttonn">X</button>
            <button @click="edititem(istrue, index)" class="buttonn">
              edit
            </button>
          </div>
        </div>
        <div>
          <div :class="istrue && 'show'">
            <input
              class="input"
              v-model="items"
              type="text"
              :placeholder="currentname"
            />
            <button @click="updateitem({ getIndex, items })">update</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      istrue: true,
      items: "",
      getIndex: 0,
      currentname: "",
      saveData: this.$store.state.myTodo,
    };
  },
  computed: {
    ...mapState({
      myData: "myTodo",
    }),
  },

  methods: {
    edititem(id, index) {
      this.istrue = !id;
      this.getIndex = index;
      let singelName = this.saveData[index];
      this.currentname = singelName;
    },
    addtodo(name) {
      console.log(name);
    },
    ...mapActions({
      addtodo: "addtodo",
      deletitem: "deletitem",
      updateitem: "updateitem",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.show {
  display: none;
}
.input {
  text-align: center;
  padding: 10px 4px;
  margin-right: 5px;
}
h1 {
  margin: 0;
}
.flex {
  justify-content: center;
  display: flex;
  justify-content: center;
  margin: 4px;
}

.parentflex {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  margin: 0 auto;
}
.margin-top {
  margin-top: 30px;
}
h2 {
  width: 140px;
  margin: 0;
  text-align: left;
  background-color: cornflowerblue;
  padding: 5px 0 5px 30px;
  border-radius: 10px;
}
.buttonn {
  background-color: red;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 10px;
  margin-left: 10px;
}
</style>
