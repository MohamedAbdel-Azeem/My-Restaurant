export function MainPage() {
    // Main Tag
    const main = document.createElement('main');
    main.classList.add('w-full','bg-blue-500');
    
    // First Div
    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('pt-10','px-6','space-x-5','flex','flex-row','items-center','justify-center','max-md:flex-col-reverse','max-md:space-y-5');
    
    const Gus_img = document.createElement('img');
    Gus_img.src = './assets/gus.png';
    
    const quote = document.createElement('blockquote');
    quote.classList.add('italic','font-semibold','text-2xl','text-wrap');
    
    const quoteText = document.createElement('q');
    
    quoteText.textContent = `Welcome to Los Pollos Hermanos Grill, where the spirit of Breaking Bad's infamous chicken joint
    comes to life. Step into a world where crisp golden chicken meets the allure of the unexpected.
    Inspired by the hit TV series, our grill promises an immersive dining 
    experience that's both nostalgic and delicious.`;
    
    quote.appendChild(quoteText);

    quoteDiv.appendChild(Gus_img);
    quoteDiv.appendChild(quote);


    // Second Div

    const visitDiv = document.createElement('div');
    visitDiv.classList.add('flex','flex-col','items-center','justify-center','pb-8','mt-20','space-y-8');

    const visitDivText = document.createElement('p');
    visitDivText.classList.add('text-xl','font-medium');
    visitDivText.textContent = 'Visit us or Order now through the App!';
    const logoimg = document.createElement('img');
    logoimg.src = './assets/logo.png';

    visitDiv.appendChild(visitDivText);
    visitDiv.appendChild(logoimg);

    // Append 2 divs to main
    main.appendChild(quoteDiv);
    main.appendChild(visitDiv);

    return main;

}