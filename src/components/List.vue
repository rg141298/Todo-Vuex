<template>
  <div>
    <Form />

    <br />
    <b-field v-for="(item, index) in todos" :key="index">
      <b-tag
        @close="completeTodo(item, index)"
        :type="item.isCompleted ? 'is-dark' : 'is-info'"
        closable
        >{{ item.text }}</b-tag
      >
    </b-field>
  </div>
</template>

<script>
import Form from "./Form";
import { mapGetters } from "vuex";
export default {
  name: "List",
  components: {
    Form,
  },
  updated: function() {
    // eslint-disable-next-line
    console.log(this.$store.state.todo);
  },
  computed: {
    ...mapGetters({
      todos: "allTodos",
    }),
  },
  methods: {
    completeTodo: function(item, index) {
      // eslint-disable-next-line
      this.$store.commit("completeTodo", {
        item: item,
        index: index,
      });
    },
  },
};
</script>
