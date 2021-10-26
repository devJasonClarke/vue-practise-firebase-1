<template>
  <div class="container">
    <div class="card">
      <p class="welcome">Welcome</p>
      <form @submit.prevent="enterChat">
        <label for="name">Please Enter your name:</label>
        <input type="text" name="name" v-model="name" />
        <button type="submit">Enter Chat</button>
      </form>
    </div>
    <p class="feedback" v-if="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Enter Your Name!";
      }
    },
  },
};
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.welcome {
  font-size: 50px;
  line-height: 0;
}
.feedback {
  font-size: 30px;
  color: red;
}
.container {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  display: flex;
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 30px;
  border-radius: 10px;
  form {
    display: flex;
    flex-direction: column;
    label {
      color: rgba(0, 0, 0, 0.6);
    }
    input {
      margin: 20px 0;
      padding: 5px 0;
      border: none;
      border-bottom: 1px solid black;
      width: 300px;
      text-align: center;
      outline: none;
    }
    button {
      width: 115px;
      margin: 0 auto;
      padding: 10px 20px;
      border: 1px solid black;
      outline: none;
      border-radius: 25px;
      background-color: white;
      color: black;
      transition: 0.3s all ease;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
