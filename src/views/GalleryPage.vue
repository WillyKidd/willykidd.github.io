<template>
  <div style="padding: 0.5rem 2rem 2rem 2rem">
    <h3 class="text">Night</h3>
    <vue-picture-swipe
      :items="night"
      :options="{ padding: { top: 20, bottom: 20, left: 20, right: 20 } }"
    ></vue-picture-swipe>
    <h3 class="text">Dusk</h3>
    <vue-picture-swipe
      :items="dusk"
      :options="{ padding: { top: 20, bottom: 20, left: 20, right: 20 } }"
    ></vue-picture-swipe>
    <h3 class="text">Day</h3>
    <vue-picture-swipe
      :items="day"
      :options="{ padding: { top: 20, bottom: 20, left: 20, right: 20 } }"
    ></vue-picture-swipe>
    <h3 class="text">Planes</h3>
    <vue-picture-swipe
      :items="planes"
      :options="{ padding: { top: 20, bottom: 20, left: 20, right: 20 } }"
    ></vue-picture-swipe>
  </div>
</template>

<style scoped>
.text {
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Courier, Courier, monospace;
  font-weight: bold;
}
</style>

<script>
import VuePictureSwipe from "vue-picture-swipe";
export default {
  components: {
    VuePictureSwipe,
  },
  data() {
    const dusk = [
      {
        src: "https://i.imgur.com/AbA4DRc.jpg",
        thumbnail: "https://i.imgur.com/AbA4DRcm.jpg",
        w: 1200,
        h: 900,
        alt: "ann arbor at dusk",
      },
      {
        src: "https://i.imgur.com/WgytmQd.jpg",
        thumbnail: "https://i.imgur.com/WgytmQdm.jpg",
        w: 1200,
        h: 900,
        alt: "ann arbor at dusk",
      },
      {
        src: "https://i.imgur.com/9Ajz4uS.jpg",
        thumbnail: "https://i.imgur.com/9Ajz4uSm.jpg",
        w: 1200,
        h: 900,
        alt: "calafate hostel",
      },
      {
        src: "https://i.imgur.com/tb7PZSA.jpg",
        thumbnail: "https://i.imgur.com/tb7PZSAm.jpg",
        w: 1200,
        h: 900,
        alt: "sjtu dorm",
      },
    ];
    const night = [
      {
        src: "https://i.imgur.com/y7PQCcu.jpg",
        thumbnail: "https://i.imgur.com/y7PQCcum.jpg",
        w: 1200,
        h: 900,
        alt: "longbin building",
      },
      {
        src: "https://i.imgur.com/WiOGTJJ.jpg",
        thumbnail: "https://i.imgur.com/WiOGTJJm.jpg",
        w: 1200,
        h: 900,
        alt: "yajiang city center, garze",
      },
      {
        src: "https://i.imgur.com/B4F3ylt.jpg",
        thumbnail: "https://i.imgur.com/B4F3yltm.jpg",
        w: 1200,
        h: 900,
        alt: "las vegas at night",
      },
      {
        src: "https://i.imgur.com/cm2ysl8.jpg",
        thumbnail: "https://i.imgur.com/cm2ysl8m.jpg",
        w: 1200,
        h: 900,
        alt: "sjtu at night",
      },
      {
        src: "https://i.imgur.com/1y1hGVk.jpg",
        thumbnail: "https://i.imgur.com/1y1hGVkm.jpg",
        w: 1200,
        h: 900,
        alt: "empty 855 bus, rainy night in shanghai",
      },
      {
        src: "https://i.imgur.com/uJqllTK.jpg",
        thumbnail: "https://i.imgur.com/uJqllTKm.jpg",
        w: 1200,
        h: 900,
        alt: "griffith observatory",
      },
      {
        src: "https://i.imgur.com/b3weDac.jpg",
        thumbnail: "https://i.imgur.com/b3weDacm.jpg",
        w: 1200,
        h: 900,
        alt: "river in wuxi",
      },
      {
        src: "https://i.imgur.com/Ezkp9pd.jpg",
        thumbnail: "https://i.imgur.com/Ezkp9pdm.jpg",
        w: 1200,
        h: 900,
        alt: "century ave, shanghai",
      },
    ];
    const planes = [
      {
        src: "https://i.imgur.com/GcTUiZt.jpg",
        thumbnail: "https://i.imgur.com/GcTUiZtm.jpg",
        w: 1200,
        h: 900,
        alt: "jetblue e190 cockpit",
      },
      {
        src: "https://i.imgur.com/Z7JIHYG.jpg",
        thumbnail: "https://i.imgur.com/Z7JIHYGm.jpg",
        w: 1200,
        h: 900,
        alt: "jetblue e190 cockpit",
      },
      {
        src: "https://i.imgur.com/fZRlMMB.jpg",
        thumbnail: "https://i.imgur.com/fZRlMMBm.jpg",
        w: 1200,
        h: 900,
        alt: "shanghai 7M8 at tianfu",
      },
      {
        src: "https://i.imgur.com/P60gg8X.jpg",
        thumbnail: "https://i.imgur.com/P60gg8Xm.jpg",
        w: 1200,
        h: 900,
        alt: "china eastern a320 at tianfu",
      },
      {
        src: "https://i.imgur.com/tBStPh8.jpg",
        thumbnail: "https://i.imgur.com/tBStPh8m.jpg",
        w: 1200,
        h: 900,
        alt: "southwest 738 at lax",
      },
      {
        src: "https://i.imgur.com/t7Ru6La.jpg",
        thumbnail: "https://i.imgur.com/t7Ru6Lam.jpg",
        w: 1200,
        h: 900,
        alt: "breeze a220 sunset",
      },
      {
        src: "https://i.imgur.com/lIcfbpW.jpg",
        thumbnail: "https://i.imgur.com/lIcfbpWm.jpg",
        w: 1200,
        h: 900,
        alt: "latam 320 cockpit",
      },
      {
        src: "https://i.imgur.com/jkJkIhS.jpg",
        thumbnail: "https://i.imgur.com/jkJkIhSm.jpg",
        w: 1200,
        h: 900,
        alt: "aerolineas 738 cockpit",
      },
    ];
    const day = [
      {
        src: "https://i.imgur.com/5dT2eKy.jpg",
        thumbnail: "https://i.imgur.com/5dT2eKym.jpg",
        w: 1200,
        h: 900,
        alt: "ushuaia",
      },
      {
        src: "https://i.imgur.com/eEnaYei.jpg",
        thumbnail: "https://i.imgur.com/eEnaYeim.jpg",
        w: 1200,
        h: 900,
        alt: "providence",
      },
      {
        src: "https://i.imgur.com/lHKWhq3.jpg",
        thumbnail: "https://i.imgur.com/lHKWhq3m.jpg",
        w: 1200,
        h: 900,
        alt: "ice cream",
      },
      {
        src: "https://i.imgur.com/VZ7hsvX.jpg",
        thumbnail: "https://i.imgur.com/VZ7hsvXm.jpg",
        w: 1200,
        h: 900,
        alt: "fin del mundo",
      },
    ];
    return {
      night: night,
      dusk: dusk,
      day: day,
      planes: planes,
    };
  },
};
</script>
