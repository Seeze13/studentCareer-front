<template>
    <div class="aside-container">
        <div class="info-container">
            <el-avatar :icon="UserFilled" />
        </div>
        <div class="menu-container">
            <el-space direction="vertical" style="width: 100%" fill>
                <div class="menu-item" @click="$router.push({ name: 'infoSearch' })">
                    <el-space size="large">
                        <div :class="['icon-container', 'icon-selected']">
                            <el-icon :size="20">
                                <Search />
                            </el-icon>
                        </div>
                        信息查询
                    </el-space>
                </div>
                <div class="menu-item">
                    <el-space size="large">
                        <el-icon :size="20">
                            <Star />
                        </el-icon>
                        学涯推荐
                    </el-space>
                </div>
                <div class="menu-item">
                    <el-space size="large">
                        <el-icon :size="20">
                            <ChatRound />
                        </el-icon>
                        人机问答
                    </el-space>
                </div>
                <div class="menu-item">
                    <el-space size="large">
                        <el-icon :size="20">
                            <User />
                        </el-icon>
                        个人信息
                    </el-space>
                </div>
                <div :class="['menu-item', 'logout']">
                    <el-space size="large">
                        <el-icon :size="20">
                            <Edit />
                        </el-icon>
                        退出登录
                    </el-space>
                </div>
            </el-space>
        </div>
    </div>
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.aside-container {
    border-right: 1px solid #e0e2e5;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.info-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

.menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.menu-item {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.menu-item:hover {
    background-color: #e0e2e5;
}

.icon-container {
    height: 36px;
    width: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
}

.icon-selected {
    background-color: #87efac;
}

.logout {
    margin-top: 50px;
}
</style>
