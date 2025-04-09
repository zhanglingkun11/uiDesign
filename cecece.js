// 侧边栏菜单展开/收起功能
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item.expandable');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
                const toggle = this.querySelector('.toggle');
                if (toggle) {
                    toggle.textContent = submenu.style.display === 'none' ? '▶' : '▼';
                }
            }
        });
    });

    // 导航项点击效果
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 子菜单项点击效果
    const submenuItems = document.querySelectorAll('.submenu-item');
    submenuItems.forEach(item => {
        item.addEventListener('click', function() {
            submenuItems.forEach(sub => sub.classList.remove('active'));
            this.classList.add('active');
        });
    });
}); 
