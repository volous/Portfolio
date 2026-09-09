<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import DuckComponent from './components/DuckComponent.vue'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <span class="brand-text">Portfolio</span><span class="dot">.</span>
      </RouterLink>

      <button class="mobile-toggle" @click="toggleMenu" aria-label="Toggle Navigation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path v-if="!isMenuOpen" d="M3 12h18M3 6h18M3 18h18" />
          <path v-else d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      <nav class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>

        <div class="dropdown">
          <RouterLink to="/projects" class="dropdown-trigger" @click="closeMenu">
            Projects
            <svg
              class="chevron"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </RouterLink>
          <div class="dropdown-menu">
            <RouterLink to="/projects" @click="closeMenu">Work Projects</RouterLink>
            <RouterLink to="/projects/school" @click="closeMenu">School Projects</RouterLink>
            <RouterLink to="/projects/extracuricular" @click="closeMenu"
              >Extracurricular Projects</RouterLink
            >
          </div>
        </div>

        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>

        <DuckComponent class="desktop-duck" :size="36" color="#3eaf7c" strokeWidth="20" />
      </nav>
    </div>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: rgba(18, 18, 20, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.brand .dot {
  color: #3eaf7c;
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0.25rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.75rem;
}

.nav-links a {
  text-decoration: none;
  color: #a1a1aa;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #ffffff;
}

.nav-links a.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #3eaf7c;
  border-radius: 2px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.chevron {
  transition: transform 0.2s ease;
}

.dropdown:hover .chevron {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(8px);
  background-color: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0;
  min-width: 180px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s;
  z-index: 200;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.6rem 1.25rem;
  font-size: 0.875rem;
  color: #a1a1aa;
  text-decoration: none;
  white-space: nowrap;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.dropdown-menu a.router-link-exact-active::after {
  display: none;
}

.dropdown-menu a.router-link-exact-active {
  color: #3eaf7c;
  font-weight: 600;
}

.main-content {
  min-height: calc(100vh - 70px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #121214;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    gap: 1.25rem;
    display: none;
  }

  .nav-links.is-open {
    display: flex;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background-color: transparent;
    border: none;
    padding-left: 1rem;
    padding-top: 0.5rem;
  }

  .dropdown:hover .chevron {
    transform: none;
  }

  .desktop-duck {
    display: none;
  }
}
</style>
