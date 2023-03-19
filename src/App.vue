<script setup>
import { RouterView } from 'vue-router'
import {
  CNavbar,
  CCollapse,
  CContainer,
  CNavbarToggler,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownMenu,
  CDropdownDivider,
  CDropdownItem,
  CDropdownToggle,
  CNavbarNav
} from '@coreui/vue'
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
        <CNavLink class="navbar-brand" href="#">Weili's Playground</CNavLink>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded="{visible}"
          @click="visible = !visible"
        />
        <CCollapse class="navbar-collapse" :visible="visible">
          <CNavbarNav class="me-auto mb-2 mb-lg-0">
            <CNavItem class="nav-item">
              <a class="nav-link" href="about">About</a>
            </CNavItem>
            <CNavItem class="nav-item">
              <a class="nav-link" href="https://willykidd.github.io/flight.html">Gallery</a>
            </CNavItem>
            <CNavItem class="nav-item">
              <a class="nav-link" href="https://willykidd.github.io/flight.html">My Flight Log</a>
            </CNavItem>
            <CDropdown variant="nav-item" :popper="false">
              <CDropdownToggle>Misc</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Mine-Sweeping</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
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
      <p>© Weili Shi 2022. Some rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  }
}
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
  padding: 2rem 1rem;
  margin-bottom: 1rem;
  background-color: rgba(255, 160, 122, 0.2);
  border-radius: 0.3rem;
}

.footer-text {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
</style>
