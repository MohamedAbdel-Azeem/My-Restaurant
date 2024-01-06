import { MainPage } from './main-page.js';
import { Footer } from './footer.js';
import { AboutPage } from './about-page.js';
import { MenuPage } from './menu-page.js';

let currentPageName = 'Home';

let pages = {
    'Home': MainPage(),
    'About': AboutPage(),
    'Menu': MenuPage()
}

let currentPage = pages['Home'];

document.querySelector('#content').appendChild(header());
document.querySelector('#content').appendChild(currentPage);
document.querySelector('#content').appendChild(Footer());


function header(){
    const header = document.createElement('header');
    header.classList.add('w-full','h-[15vh]', 'bg-red-400', 'flex', 'flex-col', 'items-center', 'py-2', 'sticky', 'top-0');

    const h1 = document.createElement('h1');
    h1.classList.add('text-4xl', 'font-semibold', 'pb-8', 'text-center', 'max-md:text-2xl');
    h1.textContent = 'Los Pollos Hermanos Grill';

    const nav = document.createElement('nav');
    nav.classList.add('w-full', 'flex','pb-8', 'justify-center', 'items-center', 'max-md:justify-between', 'max-md:px-8');

    const ul = document.createElement('ul');
    ul.classList.add('flex', 'flex-row', 'space-x-24');

    const homeLi = document.createElement('li');
    homeLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const homeButton = document.createElement('button');
    homeButton.type = 'button';
    homeButton.classList.add('btn');
    homeButton.textContent = 'Home';
    homeButton.classList.add('text-slate-100', 'underline' , 'font-bold' , 'underline-offset-4');
    homeLi.appendChild(homeButton);

    const menuLi = document.createElement('li');
    menuLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.classList.add('btn');
    menuButton.textContent = 'Menu';
    menuLi.appendChild(menuButton);

    const aboutLi = document.createElement('li');
    aboutLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const aboutButton = document.createElement('button');
    aboutButton.type = 'button';
    aboutButton.classList.add('btn');
    aboutButton.textContent = 'About';
    aboutLi.appendChild(aboutButton);




    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(aboutLi);

    for (let i = 0; i < ul.children.length; i++) {
        const li = ul.children[i];
        const button = li.children[0];
        button.addEventListener('click', function() {
            currentPageName = this.textContent;
            currentPage = pages[currentPageName];
            
            document.querySelector('#content').removeChild(document.querySelector('#content').children[1]);
            document.querySelector('#content').insertBefore(currentPage, document.querySelector('#content').children[1]);

            // Remove underline from all buttons
            for (let j = 0; j < ul.children.length; j++) {
                const otherButton = ul.children[j].children[0];
                otherButton.classList.remove('text-slate-100', 'underline' , 'font-bold' , 'underline-offset-4');
            }
    
            // Add underline to the clicked button
            this.classList.add('text-slate-100', 'underline' , 'font-bold' , 'underline-offset-4');
        });
    }


    nav.appendChild(ul);
    header.appendChild(h1);
    header.appendChild(nav);

    return header;
}

