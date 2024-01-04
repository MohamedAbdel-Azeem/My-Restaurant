let currentPage = 'Home';


function header(){
    const header = document.createElement('header');
    header.classList.add('w-full','h-36', 'bg-red-400', 'flex', 'flex-col', 'items-center', 'pt-4', 'sticky', 'top-0');

    const h1 = document.createElement('h1');
    h1.classList.add('text-4xl', 'font-semibold', 'pb-8', 'text-center', 'max-md:text-2xl');
    h1.textContent = 'Los Pollos Hermanos Grill';

    const nav = document.createElement('nav');
    

    const ul = document.createElement('ul');
    ul.classList.add('flex', 'flex-row', 'space-x-24');

    const homeLi = document.createElement('li');
    homeLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const homeButton = document.createElement('button');
    homeButton.type = 'button';
    homeButton.classList.add('btn');
    homeButton.textContent = 'Home';
    homeButton.onclick = () => changePage('Home');
    homeButton.classList.add('text-slate-100', 'underline' , 'font-bold' , 'underline-offset-4');
    homeLi.appendChild(homeButton);

    const menuLi = document.createElement('li');
    menuLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.classList.add('btn');
    menuButton.textContent = 'Menu';
    menuButton.onclick = () => changePage('Menu');
    menuLi.appendChild(menuButton);

    const aboutLi = document.createElement('li');
    aboutLi.classList.add('duration-300', 'hover:-translate-y-3', 'hover:scale-150');
    const aboutButton = document.createElement('button');
    aboutButton.type = 'button';
    aboutButton.classList.add('btn');
    aboutButton.textContent = 'About';
    aboutButton.onclick = () => changePage('About');
    aboutLi.appendChild(aboutButton);




    ul.appendChild(homeLi);
    ul.appendChild(menuLi);
    ul.appendChild(aboutLi);

    for (let i = 0; i < ul.children.length; i++) {
        const li = ul.children[i];
        const button = li.children[0];
        button.addEventListener('click', function() {
            const currentPage = this.textContent;
    
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

function Footer() {
    const footer = document.createElement('footer');
    footer.classList.add('w-full', 'h-10', 'bg-blue-900', 'flex', 'flex-row', 'items-center', 'justify-center', 'absolute', 'sticky' , 'bottom-0');

    const link = document.createElement('a');
    link.href = 'https://github.com/MohamedAbdel-Azeem/My-Restaurant';
    link.classList.add('text-slate-100', 'font-mono', 'flex', 'flex-row', 'space-x-5');

    const text = document.createElement('p');
    text.textContent = 'Made by Mohamed-Abdelazeem';

    const image = document.createElement('img');
    image.src = './assets/github-logo.png';
    image.height = 20;
    image.width = 20;

    link.appendChild(text);
    link.appendChild(image);

    footer.appendChild(link);

    return footer;
}


document.querySelector('#content').appendChild(header());
document.querySelector('#content').appendChild(Footer());