<template>
    <div class="relative form-background grid place-items-center min-h-screen">
      <div class="m-auto bg-gray-900 opacity-90 py-6 px-5 rounded-lg lg:max-w-lg">
        <h1 class="text-3xl font-bold text-center text-white my-5">
          Login to your hero account
        </h1>
        <form class="space-y-4" @submit.prevent="submitForm">
          <div>
            <label class="label" for="email">
              <span class="text-base label-text">E-mail</span>
            </label>
            <input
              id="email"
              required
              type="mail"
              placeholder="Enter your email address"
              class="placeholder-color w-full input input-bordered focus:input-primary"
            />
          </div>
          <div>
            <label class="label" for="password">
              <span
                class="text-base label-text"
                :class="{ 'text-error': state.isPasswordInvalid }"
              >{{ passwordLabelText }}</span
              >
            </label>
            <input
              v-model="password"
              ref="passwordInput"
              id="password"
              required
              type="password"
              placeholder="Enter your password"
              :class="
                state.isPasswordInvalid
                  ? 'focus:input-error'
                  : 'focus:input-primary'
              "
              class="w-full placeholder-color input input-bordered"
            />
          </div>
          <div class="flex justify-end">
            <a href="#"><p class="text-sm">Forgot password</p></a>
          </div>
          <div class="flex justify-center font-bold text-base label-text">
            <button class="btn btn-primary text-white w-full font-bold mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  </template>

  <script>
  import { ref, reactive, computed } from "vue";

  export default {
    setup() {
      const password = ref("");
      const state = reactive({
        isPasswordInvalid: false,
      });

      const passwordLabelText = computed(() => {
        return state.isPasswordInvalid
          ? "Password and confirm password do not match."
          : "Password";
      });

      const isPasswordMatch = () => {
        return password.value === confirmPassword.value;
      };

      const submitForm = () => {
        if (!isPasswordMatch()) {
          state.isPasswordInvalid = true;
          passwordInput.value.focus();
          return;
        }

        alert("Your application has been submitted.");
      };

      return {
        password,
        submitForm,
        state,
        passwordLabelText,
      };
    },
  };
  </script>


<style scoped>
.form-background {
    background-image: url("../assets/saitama-one-punch-man-thumb.jpg");
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

.placeholder-color::placeholder {
    color: #5f6c81;
}
</style>