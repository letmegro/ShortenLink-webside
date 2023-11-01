'use client'

export function createMobileNav(){
    const btn = document.getElementById('menu-btn');
    btn?.addEventListener('click', navToggle);
}

function navToggle(){
    const menu = document.getElementById('menu');
    const btn = document.getElementById('menu-btn');
    btn?.classList.toggle('open');
    menu?.classList.toggle('flex');
    menu?.classList.toggle('hidden');
}
