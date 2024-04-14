<template>
  <el-card style="width: 100vw;height: 100vh">
    <template #header>
      <div style="width: 1200px;margin: 0 auto;display: flex;align-items: center;">
        <img src="https://ywloginstatic.yuewen.com/qd6/images/logo.png">
        <el-divider direction="vertical"></el-divider>
        <h2>用户注册</h2>
      </div>
    </template>
    <div style="width: 400px;margin: 0 auto;">
      <el-form ref="formRef" label-width="80px" :model="params" :rules="rules">
        <el-form-item prop="number" label="手机号">
          <el-input size="large" v-model="params.number" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input size="large" v-model="params.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword" label="确认密码">
          <el-input size="large" v-model="params.confirmPassword" placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-row>
            <el-col :span="16">
              <el-input size="large" v-model="myCode" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="4">
            </el-col>
            <el-col :span="4">
              <el-button size="large" type="" @click="getCodes">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="selected">我已阅读并同意 《用户服务协议》和《隐私政策》</el-checkbox>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button :disabled="!selected" size="large" style="width: 320px;background-color:#ED4259;" type="primary" @click="submit">立即注册</el-button>
          </div>
        </el-form-item>
      </el-form>

    </div>
  </el-card>
</template>

<script setup>
import {reactive, ref} from "vue";
import {ElMessage, ElNotification} from "element-plus";
import axios from "axios";
import uuid from "node-uuid";
import router from "@/router/index.js";

const codes=ref()
const selected=ref(false)
const formRef=ref();
const rules=reactive({
  number:[{required:true,message:'请输入账号',trigger:'blur'},{pattern:/^1[3456789]\d{9}$/,message:'请输入正确的手机号',trigger:'blur'}],
  password:[{required:true,message:'请输入密码',trigger:'blur'},{min:6,max:12,message:'密码长度在6-12位之间',trigger:'blur'}]
})
const params=reactive({
  number:'',
  password:'',
  confirmPassword:''
})
const myCode=ref('')
const getCodes=()=>{
  codes.value=Math.floor(Math.random()*1000000)
  ElNotification({
    title: '验证码',
    message: codes.value,
    duration: 5000,
    type: 'info'
  })
}
const submit = async () => {
  if(myCode.value!=codes.value){
    ElMessage.error('验证码错误')
    return
  }
  if (params.password!==params.confirmPassword){
    ElMessage.error('确认密码不正确')
    return
  }
  await formRef.value.validate((valid) => {
    if (valid) {
      axios.put('/api/login',params).then( (res)=>{
          ElMessage.success('注册成功')
          closeDialog()
      })
    }
  })
}

</script>

<style scoped>

</style>