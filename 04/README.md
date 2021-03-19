

> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s1e06-js-events` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/) oraz posiadaczy [kursu JavaScript](https://devmentor.pl/p/javascript-for-beginners/)) lub na [dedykowanej grupie fb](https://www.facebook.com/groups/155234921740033). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*

&nbsp;

# `#04` JavaScript: Zdarzenia


> Każdy z podpunktów wykonaj w przedstawionej kolejności

## #04.01

Utwórz nasłuchiwanie na elementy `<div/>` na zdarzenie `click`. W momencie kliknięcia na dany element (użyj `this` lub `e.currentTarget`) ma zostać dodana do niego nowa klasa `clicked`.

## #04.02

Nasłuchuj również element `<body/>` na kliknięcie. W momencie kiedy kliknięcie następuję tylko i wyłącznie na `body` to należy usunać klasy `clicked` z każdego elementu `<div/>`;

## #04.03

Dodaj efekt odstępu czasowego pomiędzy kliknięciem, a zmianą koloru. Wykorzystaj `setTimeout` oraz dane zapisane w `dataset` każdego z `div-ów`. Uważaj na kontekst dla `this` oraz pierwszy parametr dla callback-a - możliwe, że będzie potrzebna użyć dodatkowej zmiennej.

Po kliknięciu na najbardziej zagnieżdżony `<div/>` (zielone obramowanie) chcemy uzyskać efekt automatycznego zakolorowania wszystkich elementów `<div/>` w odpowiednich odstępach czasu.


&nbsp;

> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:

> :no_entry: *Jeśli nie posiadasz materiałów do tego zadania, znajdziesz je na stronie [devmentor.pl](https://devmentor.pl/p/js-basics/)*
