<template>
  <div class="snackbar" @mouseenter="stopTimeOut" @mouseleave="startTimeOut">
    <div :class="type">
      <svg
        v-if="type === 'error'"
        class="inline mr-2"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#ff0000;"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
        />
      </svg>
      <p>{{ message }}</p>
      <!-- <button
        v-if="message.includes('delete')"
        class="rounded-full ml-3 uppercase font-bold p-2 bg-red-900"
        @click="$emit('remove')"
      >
        Confirm
      </button> -->
    </div>
  </div>
</template>

<script>
import Actions from "../store/actions.types";
export default {
  props: ["type", "message"],
  data() {
    return {
      timeDelay: 2.5,
      killTimeout: null,
    };
  },
  methods: {
    startTimeOut() {
      this.killTimeout = setTimeout(() => {
        // this.$store.dispatch(Actions.RESET_LOGIN_ERROR);
        this.$emit("resetError");
        this.$store.dispatch(Actions.RESET_RESPONSE);
      }, this.timeDelay * 1000);
    },
    stopTimeOut() {
      clearTimeout(this.killTimeout);
    },
  },
  mounted() {
    this.startTimeOut();
  },
};
</script>

<style lang="scss" scoped>
.snackbar {
  position: fixed;
  font-weight: bold;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  div {
    max-width: 400px;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0px -2px 8px black;
    display: flex;
    align-items: center;
    p {
      margin-left: 1rem;
      color: rgb(212, 205, 205);
    }
  }
  .error {
    background: rgb(224, 60, 60);
  }
  .success {
    background: rgb(47, 199, 47);
  }
  .info {
    background: blue;
  }
}
</style>
