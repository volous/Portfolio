<script lang="jsx" setup>
import { ref } from 'vue'
</script>

<template>
  <div class="contact-container">
    <div class="contact-info">
      <h1>Get in <span class="highlight">Touch</span></h1>
      <p class="intro-text">
        Wether you have a question, a project proposal or just want to connect, feel free to send an
        email.
      </p>

      <div class="info-list">
        <div class="info-item">
          <div class="icon-box">
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
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div>
            <span class="info-label">Email</span>
            <a href="mailto:thomaslindhardt192@gmail.com" class="info-value">
              thomaslindhardt192@gmail.com
            </a>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-box">
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
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <span class="info-label">Location</span>
            <span class="info-value">Aalborg, Denmark</span>
          </div>
        </div>

        <div class="info-item">
          <div class="icon-box">
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
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <div>
            <span class="info-label">GitHub</span>
            <a
              href="https://github.com/volous"
              target="_blank"
              rel="noopener noreferrer"
              class="info-value"
              >github.com/volous</a
            >
          </div>
        </div>
      </div>
    </div>
    <!--Interactive form column-->
    <div class="contact-form-wrapper">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input v-model="form.name" type="text" id="name" required placeholder="Your Name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            v-model="form.email"
            type="email"
            id="email"
            required
            placeholder="your.email@example.com"
          />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input v-model="form.subject" type="text" id="subject" required placeholder="Subject" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="8"
            required
            placeholder="Write your message here"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send Message</span>
          <span v-else>Sending...</span>
        </button>

        <div v-if="isSuccess" class="alert alert-success">
          Message sent successfully! I will get back to you as soon as possible.
        </div>

        <div v-if="errorMessage" class="alert alert-error">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="jsx">
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID
  console.log(formId)
  if (!formId) {
    errorMessage.value = 'Form ID ENV variable missing.'
    isSubmitting.value = false
    return
  }
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      isSuccess.value = true
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      throw new Error('Failed to send message. Please try again.')
    }
  } catch (err) {
    errorMessage.value = err.message || 'Something went wrong.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  padding: 2rem 0;
  max-width: 1100px;
  margin: 0 auto;
}

/* Left Column */
.contact-info h1 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
}

.highlight {
  color: #3eaf7c;
}

.intro-text {
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-box {
  width: 44px;
  height: 44px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3eaf7c;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.8rem;
  color: #71717a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.info-value {
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
}

a.info-value:hover {
  color: #3eaf7c;
}

/* Right Column (Form) */
.contact-form-wrapper {
  background-color: #18181b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #d4d4d8;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background-color: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  color: #ffffff;
  font-family: inherit;
  font-size: 0.95rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3eaf7c;
  box-shadow: 0 0 0 2px rgba(62, 175, 124, 0.2);
}

.submit-btn {
  background-color: #3eaf7c;
  color: #09090b;
  font-weight: 600;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #42d392;
  transform: translateY(-1px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.alert-success {
  background-color: rgba(62, 175, 124, 0.15);
  border: 1px solid rgba(62, 175, 124, 0.3);
  color: #42d392;
}

.alert-error {
  background-color: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
