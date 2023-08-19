/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/user.vue',
    './pages/index.vue',
    './pages/login.vue',
    './pages/admin.vue',
    './pages/teacher.vue',
    './pages/psychologist.vue',
    './pages/teacher-dash.vue',
    './layouts/default.vue',
    './pages/register.vue',
    './pages/student/[slug].vue',
    './app.vue'
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
}

