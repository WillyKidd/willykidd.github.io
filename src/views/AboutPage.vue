<template>
  <v-row class="section" id="hi-section">
    <v-col id="hi-container">
      <div class="text">
        <h1 class="hi-text">Hi There!</h1>
        <h1 class="hi-text">I am Weili :-)</h1>
      </div>
    </v-col>
  </v-row>
  <v-row class="section">
    <v-col class="text-container">
      <div class="text">
        <h1 class="hi-text">Work in progress....</h1>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.hi-text {
  font-weight: bold;
  font-size: 50px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.section {
  margin: 0;
  color: rgba(60,60,60);
  position: relative;
}

#hi-container {
  background: linear-gradient(
    to right, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.5) 50%,rgba(255,255,255,0) 100%
  );
  padding-bottom: 0;
  padding-left: 80px;
  padding-top: 80px;
  height: calc(100vh);
  display: block;
}

#hi-section {
  background-image: url("../assets/about.jpeg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
}

.text-container {
  padding-bottom: 0;
  padding-left: 80px;
  padding-top: 80px;
  height: 200px;
  display: block;
}
</style>
