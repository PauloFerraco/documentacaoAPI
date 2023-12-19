<template>
  <NavBar/>
  <router-view :key="this.$route.fullPath"/>
</template>

<script>
import NavBar from '@/components/navbar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap');

a, button, hr, input, li, select, textarea, ul {border: 0;list-style: none;background-color: transparent;outline: none;color: inherit;text-decoration: none;font-family: Montserrat,sans-serif;}
* {padding: 0; margin: 0;  box-sizing: border-box;}

body {
  font-family: 'Montserrat', sans-serif;
}

#app {
  width: 100%;
  height: auto;
}

.container {
  width: 45%;
  margin: 0 0 0 20%;
  padding: 60px 0 40px 60px;
  color: #444;
}

.container .title {
  font-size: 26px;
  font-weight: 700;
  margin: 50px 0 0 0;
}

.container .text {
    font-size: 14px;
    font-weight: 400;
    margin: 20px 0 0 0;
}

.container .subtitle {
    width: 30%;
    font-size: 20px;
    font-weight: 500;
    margin: 50px 0 0 0;
    border-bottom: 2px solid rgba(22,122,252,.3);
    padding: 10px 4px;
}

.container .url {
    width: 100%;
    height: auto;
    margin-top: 20px;
    line-height: 20px;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    background-color: #f1f1f1;
    border-radius: 4px;
}

table {
  width: 100%;
  height: auto;
  margin-top: 20px;
  border: 0;
  border-spacing: 0;
  border: 1px solid hsla(214,3%,59%,.2);
  border-radius: 4px;
}

table thead {
  background-color: rgba(121,227,253,.438);
  height: 60px;
}

table tr {
  width: auto;
  height: auto;
  text-align: center;
  border-bottom: 1px solid rgba(0,0,0,.15);
}
table tr:nth-child(2n) {
  background-color: #f1f1f1;
}

table tr td {
  padding: 20px;
  height: auto;
  font-size: 13px;
}
table tr td:first-of-type {
    font-weight: 600;
}

.container .info {
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  background-color: #0786db;
  color: #fff;
  margin-top: 20px;
  border-left: 4px solid #04bd14;
  border-radius: 6px;
}

.container .info .param,
.container table td .param {
    padding: 2px 4px;
    background-color: rgba(121,227,253,.438);
    border-radius: 4px;
    font-weight: 700;
    line-height: 26px;
}

.container .info i {
  position: absolute;
  width: 20px;
  height: 20px;
  font-size: 16px;
  top: -8px;
  left: -12px;
  color: #04bd14;
}

.testing {
  position: fixed;
  right: 0;
  top: 0;
  width: 32%;
  height: 100%;
  background-color: #00041a;
}

.testing .subtitle,
.testing .title {
    float: left;
    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin-top: 20px;
}
.testing .subtitle {
  font-size: 14px;
}

.testing .code {
  float: left;
  width: calc(100% - 40px);
  height: auto;
  color: #000;
  font-size: 14px;
  background-color: #fff;
  border-radius: 8px;
  margin: 20px 0 0 20px;
  padding: 10px;
}

.testing pre {
    white-space: pre-line;
    font-weight: 800;
}

.testing .exemple {
  float: left;
  width: calc(100% - 40px);
  margin: 20px 0 0 20px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.testing .exemple .box {
  position: relative;
  width: 50px;
  height: 50px;
  background-color: #eee;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin: 3px;
}
</style>