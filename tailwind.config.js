/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/user.vue',
    './pages/index.vue',
    './pages/login.vue',
    './pages/admin.vue',
    './pages/student/[slug].vue',
    './app.vue'
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}

