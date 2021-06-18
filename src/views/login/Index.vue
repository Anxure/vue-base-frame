<template>
  <div class="login-container">
    <div class="login-form-box flex h-full p-p-3">
      <div class="w-5 flex column flex-center relative align-item-center">
        <div class="title-container absolute font-bold color-f">
          {{ formTitle }}
        </div>
        <div class="center">
          <img class="w-5" :src="backImg" :alt="formTitle" />
        </div>
        <div class="t-4 login-info color-f">基于vue3.0、TypeScript、ant-design-vue开发的后台管理系统</div>
        <div class="t-4 login-info color-f">@github: <a class="color-f" target="_blank" href="https://github.com/Anxure/vue-base-frame">https://github.com/Anxure/vue-base-frame</a></div>
        <div class="t-4 login-info color-f">@author: Anxure</div>
      </div>
      <div class="w-5 flex flex-center align-item-center">
        <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="login-form">
          <div class="font-bold color-f form-title b-3">登录：</div>
          <a-form-item v-bind="validateInfos.username">
            <a-input size="large" v-model:value="formData.username" placeholder="默认账号为admin/test" />
          </a-form-item>
          <a-form-item v-bind="validateInfos.password">
            <a-input-password size="large" v-model:value="formData.password" placeholder="默认密码为123456" :visibilityToggle="false" />
          </a-form-item>
          <a-form-item>
            <div class="flex space-between">
              <a-checkbox v-model:checked="rememberMe">记住我</a-checkbox>
              <a>忘记密码？</a>
            </div>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 20, offset: 0 }">
            <a-button type="primary" size="large" class="submit-btn" @click.enter="handleLogin"> 登录 </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRaw, defineComponent, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
import { login } from '@/api/user';
import { LoginParams } from '@/api/model/userModel';
import { setStore } from '@/utils/storage';
import { useStore } from 'vuex';
import backImg from '@/assets/image/login/login-box-bg.svg';

interface DataProps {
  formTitle: string;
  rememberMe: boolean;
  formData: LoginParams;
}
export default defineComponent({
  setup() {
    const loginData: DataProps = reactive({
      formTitle: 'vue-base-frame',
      rememberMe: false,
      formData: {
        username: '',
        password: ''
      }
    });
    const router = useRouter();
    const store = useStore();
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
    const handleLogin = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      validate()
        .then(async () => {
          const { result, code } = await login(toRaw(loginData.formData));
          if (code === 0) {
            setStore('userInfo', result);
            store.commit('user/SETUSERINFO', result);
            store.dispatch('user/getMenu', { id: result.id }).then(() => {
            router.push('/workplace');
            });
          }
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      validateInfos,
      handleLogin,
      backImg,
      ...toRefs(loginData)
    };
  }
});
</script>
<style lang="less" scoped>
.login-container {
  overflow: auto;
  height: 100vh;
  background-image: url('../../assets/image/login/login.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login-form-box {
    max-width: 1600px;
    margin: 0 auto;
    .title-container {
      font-size: 35px;
      top: 30px;
    }
    .login-info {
      font-size: 18px;
      a {
      }
    }
    .login-form {
      width: 368px;
      .submit-btn {
        width: 100%;
      }
      .form-title {
        font-size: 24px;
      }
    }
  }
}
</style>
