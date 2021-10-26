<template>
  <div>
    <h1>Vue chat</h1>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
              <span class="name">Name:</span>
              <span class="text">Message</span>
              <span class="time">Time</span>
          </li>
        </ul>
      </div>
     <newMessage :name='name' />
    </div>
  </div>
</template>

<script>
import newMessage from '@/components/newMessage';
export default {
  name: "Chat",

  components:{
      newMessage
  },

  data() {
    return {
      props: {
        name: {
          type: String,
          required: true,
        },
      },
      user: this.$route.params.name,
    };
  },
  methods: {
    name() {},
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>

.card {
border: 1px solid black;
padding: 30px 0;
width: 600px;
margin: 0 auto;
}
.messages{
    margin: 0;
    padding: 0 30px;
    
    li{
        display: block;
    list-style: none;
        border-bottom: 1px solid black;
        span{
       margin-right: 15px;
    }
}
}
.name{
    color: blue;
}
.time{
    display: block;
    margin: 10px 0;
    color: rgba(0, 0, 0, 0.6);
}
</style>
