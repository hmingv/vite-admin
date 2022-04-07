<script setup lang="ts">
import { ref } from "vue";

const loginForm = ref({
  username: "",
  password: "",
});

const loginFormRef: any = ref({});
</script>

<template>
  <div>
    <n-form ref="loginFormRef" :modal="loginForm">
      <n-form-item path="username" label="用户名">
        <n-input></n-input>
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input></n-input>
      </n-form-item>
      <n-form-item>
        <n-button>登录</n-button>
      </n-form-item>
    </n-form>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>
