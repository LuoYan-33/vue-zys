<template>
  <div style="z-index: 999" class="cmhead1">
    <div class="cmhead2">
      <img style="position:absolute;width: 66px;height: 32px;margin-right: 40px;left: 70px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAABgCAMAAABxAP2cAAABAlBMVEUAAAD///////////////////////////8AAAD///8AAAD///8AAAD///8AAAD///8AAAAAAAAAAAD///8AAAAAAAD///////////////////////8AAAAAAAD///////8AAAD///8AAAD///////8AAAD///8AAAD/////8Sz///8AAAAjGRbwjkfw4ykgHgXf0yaglhsQDwK/tSFgWhBaTxtAPAuRhSGAeBbj1ikwLQjIuyaQhxg+NBhPSBH3tzzylkU+NBmDdyDk1imsoCQwJxf95S9waRPPxCOvph5oXB30pkCfkiJ2ah51ah7WyCi6riWPiBn71DP+6y7PxCQxJhejsCsaAAAAKXRSTlMAIN9AYJ+AvyC+3zDvEBBwoEC/EoBvUWHvr+6PXzDPkJBfr85Pz65PkRxK3AYAAAoESURBVHja5Zxne9owEMc9sKE47EJDaEKSTpKGDSWEkNG0adO9vv9XqbZsy7KkjucxT/9vAq7T6ue7051Ocq3/SeUCUNnaXO0+3D8sbh1jFev7zZq1aSo36wBAUL25a22MAMOxVMVmwdoEle8zO4yX08VqBLRaTOdjRlLNPgiDGE9Hw15Ew3e3SwJymHGQJoYY3056iRquBtm3yO4TNMT5qt+TazLFMfLQyqiaaHyDSU+hIQbZz2Q2KR8id/ra09DbATJIBh2rUIQjW/d7elpkkwNRcFOo9WMAOTKWDXe3YFS87RloOMicPZAtlsOekfpLfQ63vX0k0/Ze17bSZeePHrmaFDAszDnqOhSdo3TtHFipcuA9JdUcRSmMOaBf7asp/COl3FRbolsqVrr2YVwACnMNYaGlrN+DI7UcK0WeDsZDSGEYF5/P8M93MDxUaTCvQFCaA8dVoA6Mt0YQZ1cvXlxh892CX76fTlFisewk6IioE47oqCo4fmxRFlcVDGRhFBHXL6Be4i/ArbbSzdEibiN53hX8rB+xCzlwQVM7fsSljPzp6gXSJ/x1hM2hDnCbP2auEvtzh5lCCyDui9ClTALj5QuiG3JhrjJH9wjKAwN0xGGAx9nAn5h1jDA63BhTfYhXM0rxkRXuyBzqeQZ9EBXgCOYYD4ww/N8xxpfXkGB22j8Lzc8DYI40jAq1vjhj8evcqRqOAcUOjvKa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">
      <topleft @Search=""></topleft>
      <div style="position:absolute;right: 70px;">
        <el-link style="color:#999;">加入我们</el-link>
        <el-link style="color:#999;">关于公司</el-link>
        <el-divider direction="vertical"></el-divider>
        <el-link style="margin-left: 30px;margin-right: 0;">
          <el-button type="danger" style="width: 90px;height: 30px;border-radius: 15px;font-size: 16px" @click="logout">退出</el-button>
        </el-link>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Search, ArrowRight} from '@element-plus/icons-vue'
import {ref} from "vue";
import Topleft from "@/components/layout/components/topleft.vue";
import router from "@/router/index.js";

const logout = (text: string) => {
localStorage.clear()
  router.push('/login')
}
</script>
<style scoped>
.cmhead1 {
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 60px;
  width: 100%;
  color: #999999;
}

.cmhead2 {
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search {
  width: 280px;
  height: 30px;
  border-radius: 10px;
}

/deep/ .el-input__wrapper { /*或者 .s2>>>.el-input__inner  */
  background: rgba(233, 238, 243, 0.8); /*调整inner的背景色，透明*/
  border: none;
  border-radius: 31px; /*输入框圆角值*/
  box-shadow: none !important;
  color: #fff !important;
}
/deep/ .el-input__inner {
  color: #fff !important;
}

/deep/ .el-icon svg {
  color: #fff !important;
}

/deep/ .el-link {
  color: #fff;
  margin-right: 30px;
}
</style>