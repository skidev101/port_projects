const osidebar = document.getElementById('osidebarIcon');
const csidebar = document.getElementById('csidebarIcon');
const sidebar = document.getElementById('sidebar');
const body = document.querySelector('body');

osidebar.addEventListener('click', () => {
    sidebar.style.right = '0';
});

csidebar.addEventListener('click', () => {
    sidebar.style.right = '-13em';
})

window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        sidebar.style.right = '-13em';
    }
})








