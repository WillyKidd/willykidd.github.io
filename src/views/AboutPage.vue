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
        <h1 class="hi-text">About me</h1>
        <p class="p-text">
          I am currently a master's student studying computer science at Brown
          University. I spent the first 20 years of my life living in Shanghai,
          where I obtained my bachelor's degree from Shanghai Jiao Tong
          University. <br /><br />
          I am interested in computer systems, and I have previously worked at a
          <a href="https://www.risingwave.com">startup</a> developing databases
          in Rust, as well as research on encrypted databases. I want to study,
          think about and work more on systems, but I'm also interested in other
          areas of CS (try out my little <a href="/game">game</a>)! <br /><br />
          Outside of CS, I enjoy traveling around (see my
          <a href="/flight">flight log</a>), taking
          <a href="/gallery">pictures</a>, and cooking (still learning..). I
          also have a growing collection of diecast model aircrafts, and I am
          trying to keep its size under control ;)
        </p>
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
  color: rgba(60, 60, 60);
  position: relative;
}

.p-text {
  font-weight: bold;
  font-size: 25px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

#hi-container {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
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
  padding: 80px;
  height: 100%;
  display: block;
}
</style>
