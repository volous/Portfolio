<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero-container">
    <div class="hero-inner-container">
      <div class="hero-status-title">
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Available for new opportunities</span>
        </div>
      </div>

      <div class="hero-title-container">
        <h1 class="hero-title">Hi, I'm <span class="highlight">Thomas Lindhardt.</span></h1>
        <img class="image" src="/image/Thomas.png" alt="Thomas Lindhardt" />
        <p class="hero-bio">
          Fullstack software developer with a wide variety of skills.<br />
          Such as <span class="highlight">.NET, JavaScript, CSS, HTML, REST, and Docker.</span>
        </p>
      </div>
    </div>

    <div class="hero-actions">
      <RouterLink to="/projects" class="btn btn-primary">
        View Projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </RouterLink>
      <RouterLink to="/contact" class="btn btn-secondary"> Get in Touch </RouterLink>
      <a
        href="https://github.com/volous"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-icon"
        aria-label="GitHub Profile"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          ></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </a>
    </div>

    <div class="project-grid-main">
      <h3>What am I working on currently?</h3>
      <ul class="implement-list">
        <li>This website.</li>
        <li>Danish translation of this website.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}

.hero-inner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
}

.hero-status-title {
  display: flex;
  justify-content: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5rem 1rem;
  background-color: rgba(62, 175, 124, 0.1);
  border: 1px solid rgba(62, 175, 124, 0.25);
  border-radius: 18px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #3eaf7c;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #3eaf7c;
  border-radius: 50%;
  box-shadow: 0 0 8px #3eaf7c;
}

.hero-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-align: center;
}

.image {
  max-width: 180px;
  width: 100%;
  height: auto;
  border-radius: 20%;
  margin: 1.5rem 0;
}

.highlight {
  background: linear-gradient(135deg, #3eaf7c 0%, #42d392 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #a1a1aa;
  max-width: 650px;
  text-align: center;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-primary {
  background-color: #3eaf7c;
  color: #09090b;
}

.btn-primary:hover {
  background-color: #42d392;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-icon {
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: #a1a1aa;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.btn-icon:hover {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.project-grid-main {
  width: 100%;
  max-width: 800px;
  background-color: #1e2424;
  border: 1px solid #535a5a;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 1rem;
}

.implement-list {
  padding-left: 1.4rem;
  margin-top: 0.75rem;
}

@media (max-width: 640px) {
  .hero-actions {
    width: 100%;
  }
  .btn-primary,
  .btn-secondary {
    flex: 1;
    justify-content: center;
  }
  .project-grid-main {
    padding: 1.25rem;
  }

  .image {
    max-width: 180px;
    width: 100%;
    height: auto;
    border-radius: 20%;
    margin: 1.5rem 0;
  }
}
</style>
