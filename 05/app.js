const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};

/* tutaj umieść swój kod */
// Funkcja obsługująca kliknięcie w paragraf
const handleParagraphClick = function(event) {
    const paragraphId = event.currentTarget.dataset.id;

    // Zliczanie kliknięć w paragrafy
    if (stats.paragraphs[paragraphId] !== undefined) {
        stats.paragraphs[paragraphId] += 1;
    }

    // Zliczanie kliknięć w linki, jeśli kliknięty element to link
    const clickedElement = event.target;
    if (clickedElement.tagName === 'A') {
        event.preventDefault(); // Zapobieganie przeładowaniu strony

        const linkHref = clickedElement.getAttribute('href');

        // Jeśli link nie istnieje jeszcze w obiekcie stats.links, dodaj go
        if (stats.links[linkHref] === undefined) {
            stats.links[linkHref] = 0;
        }

        // Zwiększamy licznik kliknięć w dany link
        stats.links[linkHref] += 1;
    }

    // Wywołanie renderowania statystyk
    fireCustomEvent(statsElement, 'render');
};

// Pobranie wszystkich paragrafów
const paragraphs = document.querySelectorAll('p');

// Dodanie nasłuchiwania na kliknięcie dla każdego paragrafu
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', handleParagraphClick);
});


/* nie modyfikuj kodu poniżej, ale przeanalizuj go */

const statsElement = document.querySelector('.stats');
const fireCustomEvent = function(element, name) {
    console.log(element, '=>', name);

    const event = new CustomEvent(name, {
        bubbles: true,
    });

    element.dispatchEvent( event );
}

const renderStats = function(data, element) {
    let html = '';
    for(let elementType in data) {
        html += '<ul>';

        for(let key in data[elementType]) {
            
            html += '<li>';
            html += key + ' -> ' + data[elementType][key];
            html += '</li>';
        }

        html += '</ul>'
    }

    element.innerHTML = html;
}


document.addEventListener('click', function(e) {
    const tagName = e.target.tagName;
    if(tagName.includes('P') || tagName.includes('A')) {
        fireCustomEvent(statsElement, 'render');
    }
});
statsElement.addEventListener('render', renderStats.bind(this, stats, statsElement));
document.addEventListener('DOMContentLoaded', fireCustomEvent.bind(null, statsElement, 'render'));

