<script setup lang="ts">
import { ref } from "vue";
import { testApi } from "@/api/test";

const loginForm = ref({
  username: "",
  password: "",
});

const loginFormRef: any = ref({});

const test = async () => {
  const { data } = await testApi();
  console.log(data);
};
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
        <n-button @click="test">登录</n-button>
      </n-form-item>
    </n-form>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </div>
</template>
