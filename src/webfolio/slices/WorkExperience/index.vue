<template>
  <main>
    <section class="green">
      <div class="wrapper flex title">
        <h1>{{ slice.primary.title }}</h1>
      </div>
    </section>
    <article>
      <div v-for="(item, index) in slice.items" class="wrapper">
        <div class="left padding">
          <div> {{ item.title }} </div>
          <img class="companyLogo" src="../assets/Logos/coders-logo.jpg" alt="Coders">
          <div class="date">{{ item.subtitle }}</div>
          <div class="function">{{ item.function }}</div>
        </div>
        <div class="right padding">
          <p>
            {{ item.description[index].text }}
          </p>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
import type { WorkReferenceSlice } from '../../../../prismicio-types'

const props = defineProps(
  getSliceComponentProps<WorkReferenceSlice>([
    'slice',
    'index',
    'slices',
    'context'
  ])
)

</script>

<style lang="scss" scoped>
.title {
  justify-content: space-between;
  padding: 0 2em;
}
main {
  display: block;
  width: 100%;
}
.padding {
  padding: 0 2em;
}
.jari {
  max-width: 200px;
  border-radius: 100px;
  margin: 1em auto;
  display: block;
}
.introduction {
  background-color: #333;
  color: #fff;
  padding: 2em;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.67;
}
.introduction p {
  color: #fff;
}
.download {
  display: block;
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  letter-spacing: -1px;
  color: #fff;
  font-size: 1em;
  text-decoration: none;
  text-align: right;

  & span {
    text-decoration: underline;
  }
}
article {
  background: #fff;
  color: #555;
  padding: 4em 0;
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 1.67;
}
article.website {
  flex-direction: column;
}
.green-right {
  position: relative;
}
.companyLogo {
  max-width: 100%;
  height: auto;
}
.date {
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  text-align: right;
  letter-spacing: -1px;
  line-height: 4em;
}

/* Tech Logos */
.techLogos {
  width: 100%;
  text-align: center;
  margin: 2em 0;

  & img {
    margin: 0.5em;
  }
}

.logoJs,
.logoVue {
  width: 50px;
}
.logoReact {
  width: 120px;
}
.logoReactNative {
  width: 180px;
}
.logoNode,
.logoWordpress {
  width: 130px;
}
.logoWebpack {
  width: 190px;
}
.logoHTML {
  width: 90px;
}
.logoCSS {
  width: 100px;
}
.logoPHP {
  width: 110px;
}
.logoPhotoshop,
.logoPremiere {
  width: 80px;
}

/* Customer Logos */

.customerLogos {
  width: 100%;
  text-align: center;
  margin: 2em 0 0;

  & img {
    margin: 0.5em;
  }
}

.logoTaxiStockholm,
.logoCaptainMorgan,
.logoAdidas,
.logoBurgerKing,
.logoMcDonalds,
.logoCalvinKlein {
  width: 100px;
}
.logoMSF {
  width: 140px;
}
.logoVimla,
.logoCocaCola,
.logoPepsi {
  width: 130px;
}
.logoMercedes {
  width: 150px;
}
.logoGoT {
  width: 180px;
}
.logoBBC,
.logoHaS {
  width: 120px;
}
.logoReuters {
  width: 220px;
}

/* Websites */

.website small {
  text-transform: uppercase;
  margin: 1em 0 0;
  display: block;
}
.websiteLogo {
  margin: 1em 0;
  width: 100%;
  height: auto;
}
.website-tags {
  display: flex;
  flex-wrap: wrap;

  & li {
    padding: 4px 8px;
    background-color: var(--color-fruit-salad);
    color: var(--color-alabaster);
    margin: 4px;
    border-radius: 4px;
  }
}
/* General */

.left,
.right {
  width: 100%;
  margin: 0;
}

strong {
  font-weight: bold;
}

@media (min-width: 768px) {
  .jari {
    max-width: 300px;
    border-radius: 150px;
    margin: 1em auto;
    display: block;
  }
  .introduction .wrapper {
    display: flex;
    align-items: center;

    & h1 {
      text-align: left;
    }

    & img {
      width: 50%;
    }
    & .text {
      width: 50%;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: row;
  }
  .left {
    width: 50%;
  }
  .right {
    width: 50%;
  }
}
@media (min-width: 1000px) {
  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
  }
}
</style>
