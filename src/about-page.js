export function AboutPage(){
    const main = document.createElement('main');
    main.classList.add(
        'w-full', 'flex-grow',
        'min-h[80vh]', 'flex', 'flex-col', 'items-center', 'max-md:space-y-4', 'space-y-8',
        'relative', "bg-[url('./assets/store.jpg')]",'bg-cover',
    );
    main.style = 'background-repeat: no-repeat;';
    const overlay = document.createElement('div');
    overlay.classList.add('absolute', 'inset-0', 'bg-gradient-to-tr', 'from-gray-800', 'to-blue-900' , 'opacity-60');

    main.appendChild(overlay);

    const contact = document.createElement('div');
    contact.classList.add('mt-0','flex', 'flex-col', 'items-center', 'space-y-8', 'z-10', 'relative');

    const contactUs = document.createElement('h3');
    contactUs.classList.add('text-4xl', 'text-center','text-white' , 'font-semibold', 'pt-8');
    contactUs.textContent = 'Contact Us';

    const contact_ul = document.createElement('ul');
    contact_ul.classList.add(
        'flex', 'flex-col', 'items-left', 'space-y-4','text-2xl', 'text-white', 'font-semibold','list-disc',
        'max-md:text-md' , 'max-md:space-y-2'  , 'max-md:px-8'
        );

    let breakline = '';

    if (window.innerWidth < 768) {
        breakline = '<br>';
        console.log('breakline');
    } else{
        breakline = '';

    }

    const contact_li1 = document.createElement('li');
    contact_li1.innerHTML = `Phone: ${breakline} 123-456-7890`;

    const contact_li2 = document.createElement('li');
    contact_li2.innerHTML = `Email: ${breakline} info@lospollosgrill.com`;

    const contact_li3 = document.createElement('li');
    contact_li3.innerHTML = `Address: ${breakline} 1234 Los Pollos Hermanos Way, Albuquerque, NM 87104`;

    contact_ul.appendChild(contact_li1);
    contact_ul.appendChild(contact_li2);
    contact_ul.appendChild(contact_li3);

    contact.appendChild(contactUs);
    contact.appendChild(contact_ul);

    main.appendChild(contact);

    const hrs = document.createElement('div');
    hrs.classList.add('flex', 'flex-col', 'items-center', 'space-y-8', 'z-10', 'relative');

    const workingHours = document.createElement('h3');
    workingHours.classList.add('text-4xl', 'text-center','text-white' , 'font-semibold', 'pt-8');
    workingHours.textContent = 'Working Hours';

    const ul = document.createElement('ul');
    ul.classList.add('flex', 'flex-col', 'items-left', 'space-y-4','text-2xl', 'text-white', 'font-semibold', 'list-disc', 'max-md:text-md' , 'max-md:space-y-2' , 'max-md:items-center' , 'max-md:text-md' , 'max-md:px-8');

    const li1 = document.createElement('li');
    li1.textContent = 'Saturday to Thursday: 11:00 AM - 8:00 PM';

    const li2 = document.createElement('li');
    li2.textContent = 'Closed on Sundays (because even Heisenberg needs a day off)';

    ul.appendChild(li1);
    ul.appendChild(li2);

    hrs.appendChild(workingHours);
    hrs.appendChild(ul);

    main.appendChild(hrs);

    return main;

}