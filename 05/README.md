> :white_check_mark: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e06-js-events` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)) lub na ogólnodostępnej i bezpłatnej [społeczności na Discordzie](https://devmentor.pl/discord). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#05` JavaScript: Zdarzenia



Twoim zadaniem jest zbudowanie prostego systemu zliczającego kliknięcia w linki na stronie.

Stwórz go tak, aby:
- nie powodować przeładowania strony, tylko zliczać kliknięcia w konkretny link o klasie `.link` (identyfikowany po atrybucie `href`),
- sumować kliknięcia w paragraf o klasie `.text` (identyfikowany po `dataset`).

Zadanie wykonaj w taki sposób, aby nasłuchiwanie było ustawione tylko na elementy `<p/>`. Po każdym kliknięciu należy zaktualizować strukturę danych. Początkowo wygląda ona następująco:

```
const stats = {
    paragraphs: {
        'p1': 0,
    },
    links: {
        '/dolor.html': 0,
    }
};
```

Zapis `p1: 0` oznacza zero kliknięć w paragraf o atrybucie `data-id` z wartością `p1`. Natomiast `'/dolor.html': 0` oznacza zero kliknięć w link o atrybucie `href` z wartością `/dolor.html`.

Zanim przystąpisz do zadania, zapoznaj się z kodem w pliku `app.js`.
Jest tam już napisana cześć kodu, która renderuje dane przechowywane w zmiennej `stats`.
Twoim zadaniem jest napisanie części odpowiedzialnej za zliczanie kliknięć.

PS. W moim rozwiązaniu wykorzystuję metodę [.bind()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/bind). Jeśli chcesz się dowiedzieć więcej na jej temat, to zapraszam do odwiedzenia strony [javascript.info](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Function/bind).


&nbsp;

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania tj. **PDF + wideo, projekt + Code Review**, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/workshop-js-events/)*

> :arrow_left: [*poprzednie zadanie*](./../04) | ~~*następne zadanie*~~ :arrow_right:
