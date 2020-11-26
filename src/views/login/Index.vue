<template>
  <div class="login-container">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol" class="login-form">
      <div class="title-container">
        <h3 class="title">{{formTitle}}</h3>
      </div>
      <a-form-item label="用户名：" v-bind="validateInfos.name">
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="密码：" v-bind="validateInfos['password']">
        <a-input v-model:value="modelRef.password" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
        <a-button type="primary" class="submit-btn" @click="handleLogin">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, toRaw, ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useForm } from '@ant-design-vue/use';
export default defineComponent({
  setup() {
    const formTitle = ref('vue-base-frame');
    const modelRef = reactive({
      name: 'admin',
      password: 'admin'
    });
    const router = useRouter()
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
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
    const handleLogin = (e) => {
      e.preventDefault();
      validate()
        .then((res) => {
          router.push('/home');
          console.log(res, toRaw(modelRef));
        })
        .catch((err) => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      validateInfos,
      reset,
      modelRef,
      handleLogin,
      formTitle
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
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
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
