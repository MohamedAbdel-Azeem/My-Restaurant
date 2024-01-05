export function Footer() {
    const footer = document.createElement('footer');
    footer.classList.add(
        'w-full', 'min-h-[5vh]', 'py-1' ,'bg-blue-900',
    'flex', 'flex-row', 'items-center', 'justify-center', 'absolute', 'sticky' , 'bottom-0'
    );

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