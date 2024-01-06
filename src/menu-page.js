export function MenuPage() {
    const main = document.createElement('main');
    main.classList.add('w-full','bg-blue-500' , 'flex-grow','flex','flex-col','items-center');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('grid-cols-2','px-4','py-8','space-y-8','space-x-8','grid','max-md:grid-cols-1','max-md:space-y-8','max-md:space-x-2');


    const menuItems = [
        {
            'imgSrc': './assets/fried-chicken.jpg',
            'headingText': "Gus's Gusto Chicken",
            'pText': "Our signature fried chicken, inspired by Gus Fring's dedication to perfection. It's a taste you won't forget."
        },
        {
            'imgSrc': './assets/burger.jpg',
            'headingText': "Heisenburger",
            'pText': "A burger that breaks bad with bold flavors: blue cheese, secret sauce, and a touch of culinary rebellion."
        },
        {
            'imgSrc': './assets/tacos.jpg',
            'headingText': "Saul's Special Tacos",
            'pText': "Tacos that speak volumes, seasoned with wit and served with a side of legal charm."
        },{
            'imgSrc': './assets/pizza.jpg',
            'headingText': "Pinkman's Pizza Pie",
            'pText': `A pizza with a sprinkle of Jesse's rebellious spirit. Topped with fiery jalapeños and a hint of "Yeah, science!"`
        },{
            'imgSrc': './assets/sundae.jpg',
            'headingText': "Better Call Salted Caramel Sundae",
            'pText': "A dessert that'll make you call for more. Salted caramel, ice cream, and a dash of legal mischief."
        }
    ];

    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = createMenuElement(menuItems[i].imgSrc, menuItems[i].headingText, menuItems[i].pText);
        if (i == 0){
            menuItem.classList.add('mt-8','ml-8','max-md:ml-2','max-md:mt-2');
        }
        menuDiv.appendChild(menuItem);
    }

    main.appendChild(menuDiv);
    return main;
}




function createMenuElement(imgSrc, headingText, pText) {
    const menuElement = document.createElement('div');
    menuElement.classList.add(
        'bg-white','rounded-lg','shadow-lg','flex','flex-row',
        'space-y-8','max-md:flex-col','hover:shadow-2xl','hover:scale-105','transition','duration-500','ease-in-out'
    );


    const img = document.createElement('img');
    img.classList.add('rounded-lg','w-1/2','max-md:w-full');
    img.src = imgSrc;

    const content = document.createElement('div');
    content.classList.add('flex','flex-col','space-y-14','w-1/2','max-md:w-full','justify-center','items-center','max-md:pb-2','px-2');

    const heading = document.createElement('h1');
    heading.classList.add('text-2xl','text-center','font-semibold','mt-2');
    heading.textContent = headingText;

    const p = document.createElement('p');
    p.classList.add('text-center','text-stone-800','font-semibold','mt-2');
    p.textContent = pText;

    content.appendChild(heading);
    content.appendChild(p);

    menuElement.appendChild(img);
    menuElement.appendChild(content);

    return menuElement;
}