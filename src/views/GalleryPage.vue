<template>
  <vue-picture-swipe
    :items="items"
    class="gallery-images"
    :options="{ padding: { top: 20, bottom: 20, left: 20, right: 20 } }"
  ></vue-picture-swipe>
</template>

<style scoped>
.gallery-images {
  padding: 3rem 3rem;
}
</style>

<script>
import VuePictureSwipe from "vue-picture-swipe";
export default {
  components: {
    VuePictureSwipe,
  },
  data() {
    return {
      items: [
        {
          src: "https://i.imgur.com/AbA4DRc.jpg",
          thumbnail: "https://i.imgur.com/AbA4DRcm.jpg",
          w: 1200,
          h: 900,
          alt: "ann arbor at dusk",
        },
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
          src: "https://i.imgur.com/P60gg8X.jpg",
          thumbnail: "https://i.imgur.com/P60gg8Xm.jpg",
          w: 1200,
          h: 900,
          alt: "china eastern a320 at tianfu",
        },
        {
          src: "https://i.imgur.com/GcTUiZt.jpg",
          thumbnail: "https://i.imgur.com/GcTUiZtm.jpg",
          w: 1200,
          h: 900,
          alt: "jetblue e190 cockpit",
        },
      ],
    };
  },
};
</script>
