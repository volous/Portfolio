<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="nav-container">
      <!-- Navigation Links -->
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>

        <!-- Dropdown container -->

        <div class="dropdown">
          <RouterLink to="/projects" class="dropdown-trigger">
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
            <RouterLink to="/projects">Work Projects</RouterLink>
            <RouterLink to="/projects/school">School Projects</RouterLink>
            <RouterLink to="/projects/extracuricular">Extracuricular Projects</RouterLink>
          </div>
        </div>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <!-- Brand Logo / Name -->
      <RouterLink to="/" class="brand">
        <span class="brand-text">Portfolio</span><span class="dot">.</span>
      </RouterLink>
    </div>
  </header>

  <!-- Main Page Content Container -->
  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  background-color: rgba(18, 18, 20, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-container {
  max-width: 100%;
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

.nav-links {
  display: flex;
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

.nav-links a:hover {
  color: #ffffff;
}

/* Active link style automatically applied by Vue Router */
.nav-links a.router-link-exact-active {
  color: #ffffff;
  font-weight: 600;
}

/* Active link underline indicator */
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

.main-content {
  max-height: 100dvh;
  margin: 0 auto;
  padding: 2rem 1.5rem;
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

  /* Hide by default */
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s;
  z-index: 200;
}
/* Invisible hover bridge */
.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
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
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
}

.dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

/* Remove active underline inside the dropdown popover */
.dropdown-menu a.router-link-exact-active::after {
  display: none;
}

.dropdown-menu a.router-link-exact-active {
  color: #3eaf7c;
  font-weight: 600;
}

.main-content {
  max-height: 100dvh;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}
</style>
