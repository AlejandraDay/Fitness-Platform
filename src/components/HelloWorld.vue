<template>
  <div class="center content-inputs">
    <vs-input
      primary
      v-model="value"
      placeholder="Primary"
    />

    <vs-input
      success
      v-model="value2"
      placeholder="Success"
    />

    <vs-input
      danger
      v-model="value3"
      placeholder="Danger"
    />

    <vs-input
      warn
      v-model="value4"
      placeholder="Warn"
    />

    <vs-input
      dark
      v-model="value5"
      placeholder="Dark"
    />

    <vs-input
      :color="'#7d33ff'"
      v-model="value6"
      placeholder="HEX"
    />

    <vs-input
      :color="'rgb(59,222,200)'"
      v-model="value7"
      placeholder="RGB"
    />

    <vs-sidebar
      absolute
      v-model="active"
      open
    >
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="music">
        <template #icon>
          <i class='bx bxs-music'></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-group'></i>
            </template>
            Social media
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="instagram">
          <template #icon>
            <i class='bx bxl-instagram'></i>
          </template>
          Instagram
        </vs-sidebar-item>
        <vs-sidebar-item id="twitter">
          <template #icon>
            <i class='bx bxl-twitter' ></i>
          </template>
          Twitter
        </vs-sidebar-item>
        <vs-sidebar-item id="facebook">
          <template #icon>
            <i class='bx bxl-facebook' ></i>
          </template>
          Facebook
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-code-alt' ></i>
            </template>
            Coding
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item id="github">
          <template #icon>
            <i class='bx bxl-github' ></i>
          </template>
          Github
        </vs-sidebar-item>
        <vs-sidebar-item id="codepen">
          <template #icon>
            <i class='bx bxl-codepen'></i>
          </template>
          Codepen
        </vs-sidebar-item>
        <vs-sidebar-item id="discord">
          <template #icon>
            <i class='bx bxl-discord'></i>
          </template>
          Discord
        </vs-sidebar-item>
        <vs-sidebar-item id="javascript">
          <template #icon>
            <i class='bx bxl-javascript' ></i>
          </template>
          Javascript
        </vs-sidebar-item>
        <vs-sidebar-item id="git">
          <template #icon>
            <i class='bx bxl-git' ></i>
          </template>
          Git
        </vs-sidebar-item>
      </vs-sidebar-group>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class='bx bxs-donate-heart' ></i>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class='bx bx-drink'></i>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class='bx bxs-shopping-bags'></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat' ></i>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class='bx bx-bell' ></i>

            <template #badge>
              28
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      active: 'home',
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: ''
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
