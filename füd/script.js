const osidebar = document.getElementById('osidebarIcon');
const csidebar = document.getElementById('csidebarIcon');
const sidebar = document.getElementById('sidebar');
const links = document.querySelectorAll('.links li a p');


osidebar.addEventListener('click', () => {
    sidebar.style.right = '0';
});

csidebar.addEventListener('click', () => {
    sidebar.style.right = '-100%';
});

links.addEventListener('click', () => {
    sidebar.style.right = '-100%';
});











