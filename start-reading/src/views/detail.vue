<script setup>
import {useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
const data=ref({})
const route = useRoute()
const getMsg = () => {
  axios({
    url: '/api/detail',
    method: 'get',
  }).then(res => {
    console.log(res.data.data)
    data.value=res.data
  })
}
onMounted(()=>{
  getMsg()

})
</script>

<template>
  <div
      style="width: 100%;height: 68px;border-bottom: #181818 1px solid;display:flex;align-items: center;padding: 0 60px;">
    <img src="https://imgservices-1252317822.image.myqcloud.com/coco/s06132023/56f0d33e.pa0kaq.svg">
  </div>
  <div style="width: 1200px;margin: 10px auto;">
    <el-card>
      <div style="display:flex;">
        <img style="width: 180px;height: 240px;margin-right: 20px;"
             src="//bookcover.yuewen.com/qdbimg/349573/1036370336/150.webp">
        <div>
          <h1 style="margin: 0 0 10px 0;">
            {{ route.params.title }}
          </h1>
          <h4 style="margin: 0;">作者:爱潜水的乌贼</h4>
          <p style="margin: 0;">最新章节: 第二百三十章 镜中世界第三层 </p>
          <div>
            <p class="book-attribute">  <span>连载</span>  <span class="dot">·</span>   <span>签约</span> <span class="dot">·</span>    <span>VIP</span> <span class="dot">·</span>    <a rel="nofollow" href="//www.qidian.com/xuanhuan/" target="_blank" data-eid="qd_G10" title="玄幻小说">玄幻</a><span class="dot">·</span>    <a rel="nofollow" href="//www.qidian.com/all/chanId21-subCateId73/" target="_blank" data-eid="qd_G11" title="异世大陆小说">异世大陆</a>     </p>
            <p>
              心潮澎湃，无限幻想，迎风挥击千层浪，少年不败热血！
            </p>
            <p class="count"><em>231.56万</em><cite>字</cite> <em>729.6万</em><cite>总推荐</cite> <em>9.43万</em><cite>周推荐</cite></p>
          </div>
          <div style="display:flex;">
            <el-button type="primary">免费试读</el-button>
            <el-button type="primary">加入书架</el-button>
            <el-button type="primary">互动投票</el-button>
            <el-button type="primary">手机扫码读本书</el-button>
          </div>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top: 20px">
      <h1>作品简介</h1>
      <p id="book-intro-detail">{{data.p1}}<br>{{ data.p2 }}<br>{{data.p3}}  </p>
    </el-card>
  </div>

</template>

<style scoped>
.count{
  -webkit-font-smoothing: antialiased;
  color: #262626;
  font-family: PingFangSC-Regular,HelveticaNeue-Light,Helvetica Neue Light,Microsoft YaHei,"sans-serif";
  text-align: left;
  padding: 0;
  word-wrap: break-word;
  word-break: break-all;
  margin: 8px 0;
}
</style>