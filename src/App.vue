<script setup>
import MyAside from './components/MyAside.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="240px">
                <MyAside />
            </el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <div class="content-container">
                        <RouterView />
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style scoped>
.common-layout {
    width: 100vw;
    background-color: #fafaf9;
}
.content-container {
    width: 100%;
    height: 100%;
    background-color: #f5f5f4;
    border-radius: 16px;
    padding: 16px 24px;
    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}
</style>
