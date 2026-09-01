<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="hero-container">
    <div class="hero-inner-container">
      <div class="hero-status-title">
        <!-- Status Badge -->
        <div class="status-badge">
          <span class="status-dot"></span>
          <span>Available for new opportunities</span>
        </div>
      </div>
      <!-- Main Headline -->
      <div class="hero-title-container">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">Thomas Lindhardt</span>.<br />
          I build full-stack web applications.
        </h1>
        <img class="image" src="/public/image/Thomas.png" />
        <!-- Short Bio -->
        <p class="hero-bio">
          <!-- Software developer specializing in modern frontend systems and C# / .NET backends. Focused
          on crafting clean, performant interfaces and scalable digital experiences. -->
          Software developer with a wide variety of skills.
        </p>
      </div>
    </div>

    <!-- Call to Action Buttons -->
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

      <!-- External GitHub Link -->
      <a
        href="https://github.com"
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
  </section>
</template>

<style scoped>
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.hero-inner-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.hero-status-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
}

/* Status Badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0.5rem;
  background-color: rgba(62, 175, 124, 0.1);
  border: 1px solid rgba(62, 175, 124, 0.25);
  border-radius: 18px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #3eaf7c;
  height: fit-content;
  align-self: flex-start;
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
  margin-right: 25rem;
}
/* Headline */
.hero-title {
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 0;
  margin-top: 0;
  text-align: center;
}
.image {
  width: 30%;
  align-self: center;
  justify-self: center;
  margin: 1rem 0;
}
.highlight {
  background: linear-gradient(135deg, #3eaf7c 0%, #42d392 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Bio Text */
.hero-bio {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #a1a1aa;
  max-width: 650px;
}

/* Action Buttons Group */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.email-link {
  color: #25257e;
}

/* Base Button Styles */
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

/* Primary CTA */
.btn-primary {
  background-color: #3eaf7c;
  color: #09090b;
}

.btn-primary:hover {
  background-color: #42d392;
  transform: translateY(-2px);
}

/* Secondary CTA */
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

/* Icon Button (GitHub / Socials) */
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

/* Responsive Adjustments */
@media (max-width: 640px) {
  .hero-container {
    padding: 2rem 0;
  }
  .hero-actions {
    width: 100%;
  }
  .btn-primary,
  .btn-secondary {
    flex: 1;
    justify-content: center;
  }
}
</style>
