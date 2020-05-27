<template lang="pug">
  .wrap-admin
    vueHeader
    vueMenu
</template>
<script>
import vueHeader from "./components/vueHeader";
import vueMenu from "./components/vueMenu";

export default {
  name: "App",
  components: {
    vueHeader,
    vueMenu,
  },
  methods: {
    addGroup() {},
  },
};
</script>
<style lang="pcss">
.btn-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
button {
  border: 0;
  cursor: pointer;
  background: transparent;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}
blockquote {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
a:active {
  outline: none;
}
img {
  display: block;
  max-width: 100%;
  /* max-height: 100%; */
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

footer {
  position: relative;
  width: 100%;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}
button:active {
  outline: none;
}
input,
textarea {
  border: none;
  box-shadow: none;
}
textarea:active {
  border-bottom: 2px solid #383bcf;
}
.main {
  background: #f7f9fe;
}
.container
 {
  margin: 0 auto;
  max-width: 1000px;
}

.block-title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 55px;
}

input {
  border: none;
  box-shadow: none;
  padding: 5px;
}
</style>
