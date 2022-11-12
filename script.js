// Navbar
const toggleBtn = document.querySelector('.toggle-btn')
const menu = document.querySelector('.toggle-btn .menu')
const primaryNav = document.querySelector('.primary-nav')
const body = document.body

toggleBtn.addEventListener('click', () => {
  primaryNav.classList.toggle('active')
  toggleBtn.classList.toggle('close')
  // body.classList.toggle('active-nav')
})

// Bookmark page
const bookmark = document.querySelector('.bookmark')
const svgCircle = document.querySelector('svg circle')
const svgPath = document.querySelector(' path')
bookmark.addEventListener('click', () => {
  bookmark.style.color = 'hsl(176, 50%, 47%)'
  svgCircle.setAttribute('fill', 'hsl(176, 50%, 47%)')
  svgPath.setAttribute('fill', 'hsl(0, 0%, 100%)')
})