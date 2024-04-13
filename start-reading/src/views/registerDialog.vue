<template>
<el-dialog title="注册" v-model="dialogVisible" width="30%">
  <el-card>
    <el-form ref="formRef" label-width="80px" :model="params" :rules="rules">
      <el-form-item prop="number" label="手机号">
        <el-input v-model="params.number" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="params.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码">
        <el-row>
          <el-col :span="16">
            <el-input v-model="myCode" placeholder="请输入验证码"></el-input>
          </el-col>
          <el-col :span="4">
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="getCodes">获取验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <div>
          <el-button @click="closeDialog">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </div>
      </el-form-item>
    </el-form>

  </el-card>
</el-dialog>
</template>

<script setup>
import {reactive, ref} from "vue";
import {ElMessage, ElNotification} from "element-plus";
import axios from "axios";
import uuid from "node-uuid";
import router from "@/router/index.js";

const codes=ref()
const dialogVisible=ref(false)
const openDialog = () => {
  dialogVisible.value = true
}
const closeDialog = () => {
  dialogVisible.value = false
  params.number=''
  params.password=''
  myCode.value=''
}
const formRef=ref();
const rules=reactive({
  number:[{required:true,message:'请输入账号',trigger:'blur'},{pattern:/^1[3456789]\d{9}$/,message:'请输入正确的手机号',trigger:'blur'}],
  password:[{required:true,message:'请输入密码',trigger:'blur'},{min:6,max:12,message:'密码长度在6-12位之间',trigger:'blur'}]
})
const params=reactive({
  number:'',
  password:'',
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
  await formRef.value.validate((valid) => {
    if (valid) {
      axios.put('/api/login',params).then( (res)=>{
          ElMessage.success('注册成功')
          closeDialog()
      })
    }
  })
}

defineExpose({
  openDialog,
  closeDialog
})
</script>

<style scoped>

</style>