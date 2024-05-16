<template>
  <header>
    <div class="wrapper">
      <h1>
        <span class="firstName">Jari</span>
        <span class="lastName">Gantvoort</span>
        <span class="separator">|</span>
        <span class="title">Web Developer</span>
      </h1>
      <nav>
        <ul v-for="(item, index) in data.data.slices" :key="index" >
          <AppLink
              :key="`main-${index}`"
              :to="item.primary.link.uid"
              class="menu-main__link button button-link"
          >
            {{ item.primary.page_title }}
          </AppLink>
        </ul>
<!--        <div v-if="data?.data?.slices.length > 0" class="menu-main">-->
<!--          <div class="menu-main__list">-->
<!--            <div v-for="(item, index) in data.data.slices" :key="index" class="menu-main__item">-->
<!--              <AppLink-->
<!--                :key="`main-${index}`"-->
<!--                :to="item.primary.link.uid"-->
<!--                class="menu-main__link button button-link"-->
<!--              >-->
<!--                {{ item.primary.page_title }}-->
<!--              </AppLink>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps({
    data: {
        type: Object,
        default: null
    }
})
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(248, 248, 248);
  margin: 0;
  display: flex;
  justify-content: center;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  padding: 0 2rem;
}
h1 {
  font-family: Roboto, sans-serif;
  font-size: 1.4em;
  display: flex;
  align-items: center;
}
.firstName {
  font-weight: 900;
  text-transform: uppercase;
  color: rgb(85, 85, 85);
  letter-spacing: -1px;
}
.lastName {
  font-weight: 100;
  text-transform: uppercase;
  color: rgb(68, 68, 68);
  letter-spacing: -1px;
}
.separator {
  color: rgb(85, 85, 85);
  padding: 0 0.2em;
  font-weight: 200;
}
.title {
  font-weight: 700;
  letter-spacing: -1px;
  color: rgb(104, 203, 96);
  font-size: 0.8em;
}

ul {
  display: none;
}

@media (min-width: 768px) {
  i {
    font-size: 1.5em;
    margin-left: 0.5rem;
  }
  ul {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    background-color: #f8f8f8;
  }
  li {
    display: flex;
    align-items: center;
    text-align: center;
    color: #888;
    padding: 0.3rem 0.5rem;
    margin: 0 0.5rem;
    cursor: pointer;

    & div {
      font-size: 0.8em;
      display: inline-block;
    }
  }
  a {
    text-decoration: none;

    &:link {
      color: rgb(68, 68, 68);
    }
    &:visited {
      color: rgb(68, 68, 68);
    }
    &:hover {
      color: rgb(104, 203, 96);
    }
    &:active {
      color: rgb(104, 203, 96);
    }
  }

  .active {
    color: rgb(104, 203, 96);
    border-bottom: 2px solid rgb(104, 203, 96);
  }
}
</style>
