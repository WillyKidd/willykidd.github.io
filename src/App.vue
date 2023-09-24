<script setup>
import { RouterView } from "vue-router";
import {
  CNavbar,
  CCollapse,
  CContainer,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CNavbarNav,
} from "@coreui/vue";
</script>

<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Weili's Playground</title>
    </head>
    <CNavbar expand="lg" class="navbar">
      <CContainer fluid>
        <CNavLink class="navbar-brand" href="/">
          <img
            style="display: inline; width: 40px"
            src="@/assets/emoji/playground.svg"
            alt="slide"
          />
          Weili's Playground
        </CNavLink>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded="{visible}"
          @click="visible = !visible"
        />
        <CCollapse class="navbar-collapse" :visible="visible">
          <CNavbarNav class="me-auto mb-2 mb-lg-0">
            <CNavItem class="nav-item">
              <a class="nav-link" href="/about">
                <img
                  style="display: inline; width: 25px"
                  src="@/assets/emoji/about.svg"
                  alt="slide"
                />
                About
              </a>
            </CNavItem>
            <CNavItem class="nav-item">
              <a class="nav-link" href="/gallery">
                <img
                  style="display: inline; width: 25px"
                  src="@/assets/emoji/gallery.svg"
                  alt="slide"
                />
                Gallery
              </a>
            </CNavItem>
            <CNavItem class="nav-item">
              <a class="nav-link" href="/flight">
                <img
                  style="display: inline; width: 25px"
                  src="@/assets/emoji/plane.svg"
                  alt="slide"
                />
                Flight Log
              </a>
            </CNavItem>
            <CNavItem class="nav-item">
              <a class="nav-link" href="/game">
                <img
                  style="display: inline; width: 25px"
                  src="@/assets/emoji/bomb.svg"
                  alt="slide"
                />
                MineSweeper
              </a>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    <div class="big-container">
      <RouterView />
    </div>
  </div>
  <footer class="text-center">
    <div class="footer-text">
      <p>© Weili Shi 2023. Some rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    document.title = "Weili's Playground";
  },
};
</script>

<style scoped>
.navbar {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.big-container {
  margin-bottom: 1rem;
  background-color: rgba(255, 160, 122, 0.2);
  border-radius: 0.3rem;
  height: 100%;
  display: block;
}

.footer-text {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
