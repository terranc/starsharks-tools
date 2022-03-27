<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">打金系列工具</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">小助手钱包格式化</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/address_batch_creator">钱包&私钥批量生成</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/address_batch_creator2">助记词钱包批量生成</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/get_sea_in_game">获取游戏内SEA余额</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
