<template>
 
 <div class="add-message">
          <input type="text">
          <button>Send</button>
      </div>

</template>

<script>
    export default {
        name: 'newMessage'
    }
</script>

<style lang="scss" scoped>

.add-message{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 0 30px;
    border-top: 2px solid green;

    input{
          margin: 20px 0;
      padding: 5px 0;
      border: none;
      border-bottom: 1px solid black;
 
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
    }}
</style>