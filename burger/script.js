const osidebar = document.getElementById('osidebarIcon');
const csidebar = document.getElementById('csidebarIcon');
const sidebar = document.getElementById('sidebar')

osidebar.addEventListener('click', () => {
    sidebar.style.left = '0';
});

csidebar.addEventListener('click', () => {
    sidebar.style.left = '-13em';
})
