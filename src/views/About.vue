<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="div-sec div-profile-2cols">
    <div>
      <img class="portrait" src="../assets/butters.jpg" />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: rgba(255, 160, 122, 0.2);
  border-radius: 0.3rem;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.div-sec {
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 320px;
  max-width: 1024px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.div-profile-2cols {
  display: grid;
  grid-template-columns: 180px 1fr;
  column-gap: 3rem;
  align-items: center;
}
</style>
