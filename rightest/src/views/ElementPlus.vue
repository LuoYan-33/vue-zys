<template>
  <div class="yuan">
    <h2>袁磊的element plus组件</h2>
    <h3>徽章</h3>
    <div>
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" color="green">
        <el-button>custom background</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <el-icon class="el-icon--right"><caret-bottom /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="clearfix">
              comments
              <el-badge class="mark" :value="12" />
            </el-dropdown-item>
            <el-dropdown-item class="clearfix">
              replies
              <el-badge class="mark" :value="3" />
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <el-badge is-dot class="item">query</el-badge>
    <el-badge is-dot class="item">
      <el-button class="share-button" :icon="Share" type="primary" />
    </el-badge>
  </div>
  <h2>走马灯、幻灯片、轮播图、焦点图</h2>
  <el-carousel height="150px">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 class="small justify-center" text="2xl">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <h2>tab选项卡</h2>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>
  </div>
  <!-- 扩展：完成7个组件 -->
</template>
<script lang="ts" setup>
import { Share } from "@element-plus/icons-vue";
import type { TabsPaneContext } from 'element-plus'
import {ref} from 'vue'
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style  scoped>
.el-badge {
  margin: 8px;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>