<template>
  <div class="global-nav">
    <div class="top-logo">logo</div>
    <nav>
      <ul class="nav">
        <li class="nav-list"><nuxt-link to="/">TOP</nuxt-link></li>
        <li class="nav-list"><nuxt-link to="/products">PRODUCTS</nuxt-link></li>
        <li class="nav-list"><nuxt-link to="/gift">GIFT</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.global-nav {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0 ;
  left: 0;
  z-index: 500;
  width: 100vw;
  background-color: rgba(0,0,0,0.3);
  color:#fff;
}
.nav {
  display: flex;
  width: 400px;
  justify-content: space-around;
  &-list {
    width: 120px;
    text-align: center;
    border-right: 1px solid;
  }
}

</style>
