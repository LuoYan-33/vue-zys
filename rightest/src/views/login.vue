<template>
  <div style="width: 100vw;display:flex;">
    <div style="width: 60vw;height: 100vh;">
      <img style="width: 100%;height: 100%;" src="https://daren.izuiyou.com/dist/static/bg.42e711f4.png">
    </div>
    <div style="background:#fff;width: 40vw;height: 100vh;display:flex;align-items: center;justify-content: center">
      <el-row>
        <el-col :span="24">
          <div style="text-align: center;">
            <img style="width: 60px;height: 60px;" src="data:image/png;base64,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">
          </div>
        </el-col>
        <el-col :span="24">
          <div style="text-align: center;">
            <h1>登录</h1>

            <el-form ref="formRef" :model="loginParams" :rules="rules">
              <el-form-item prop="number" label="账号">
                <el-input :minlength="11" :maxlength="11" v-model="loginParams.number" placeholder="手机号" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input type="password" v-model="loginParams.password" placeholder="密码" />
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="dialogRef.openDialog()">注册</el-button>
          </div>
        </el-col>
      </el-row>
      <RegisterDialog ref="dialogRef"></RegisterDialog>
    </div>
  </div>

</template>
<script setup>
import {reactive, ref} from "vue";
import router from "@/router/index.js";
import axios from "axios";
import {ElMessage} from "element-plus";
import uuid from 'node-uuid';
import RegisterDialog from "@/views/registerDialog.vue";
const formRef=ref()
const dialogRef=ref()
const rules=reactive({
  number:[{required:true,message:'请输入账号',trigger:'blur'},{pattern:/^1[3456789]\d{9}$/,message:'请输入正确的手机号',trigger:'blur'}],
  password:[{required:true,message:'请输入密码',trigger:'blur'},{min:6,max:12,message:'密码长度在6-12位之间',trigger:'blur'}]
})
const loginParams=reactive({
  number:'',
  password:''
})
const visible=ref(false)
const login = async () => {
  await formRef.value.validate((valid) => {
    if (valid) {
      axios.get('/api/login').then( (res)=>{
        if (res.data.number==loginParams.number&&res.data.password==loginParams.password){
           ElMessage.success('登录成功')
          localStorage.setItem('token',uuid())
          const url = router.resolve({ name: 'home' }).href;
           setTimeout(()=>{
             location.href=url
           },1000)
        }else {
          ElMessage.error('账号或密码错误')
        }
      })
    }
  })
}
</script>
<style scoped>
.se-img{
  width: 307px;
  height: 30px;
  border: 0;
  margin-top: 24px;
  margin-bottom: 34px;
  background-image: url();
  background-size: cover;
}
</style>