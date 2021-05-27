<template>
  <div class="login-container">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="login-form">
      <div class="title-container">
        <h3 class="title">{{formTitle}}</h3>
      </div>
      <a-form-item label="用户名：" v-bind="validateInfos.username">
        <a-input v-model:value="formData.username" placeholder="默认账号为admin/test" />
      </a-form-item>
      <a-form-item label="密码：" v-bind="validateInfos.password">
        <a-input-password v-model:value="formData.password" placeholder="默认密码为123456" :visibilityToggle="false" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
        <a-button type="primary" class="submit-btn" @click.enter="handleLogin">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { reactive, toRaw, defineComponent, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
import { login } from '@/api/user'
import {LoginParams } from '@/api/model/userModel'
import { setStore } from '@/utils/storage'
import { useStore } from 'vuex'
interface DataProps {
    formTitle: string;
    formData: LoginParams;
}
export default defineComponent({
  setup() {
    const loginData : DataProps = reactive({
      formTitle: 'vue3-base-frame',
      formData: {
        username: 'admin',
        password: ''
      }
    });
    const router = useRouter();
    const store = useStore()
    const { validate, validateInfos } = useForm(
      loginData.formData,
      reactive({
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          }
        ]
      })
    );
    const handleLogin = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      validate()
        .then(async () => {
          const {result, code} = await login(toRaw(loginData.formData))
          if (code === 0) {
            setStore('userInfo', result)
            store.commit('user/SETUSERINFO', result)
            router.push('/home');
            store.dispatch('user/getMenu', {id: result.id})
          }
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    const refData = toRefs(loginData)
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      validateInfos,
      handleLogin,
      ...refData
    };
  }
});
</script>
<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;
  background-image: url('../../assets/image/login/login.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      margin: 0 auto 10px auto;
      text-align: center;
      font-weight: bold;
    }
  }
  .login-form {
    width: 368px;
    margin: 80px auto 0 auto;
    .submit-btn {
      width: 100%;
    }
  }
}
</style>
