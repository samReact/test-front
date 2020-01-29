<h1 align="center">OptiSantis Test Développeur FrontEnd</h1>

<p align="center">
    <a href="#prerequis">Prérequis</a> • <a href="#les-composants">Composants</a> • <a href="#bonus">Bonus</a> • <a href="#final">Final</a>
</p>

<div align="center">
    <img src="./assets/images/.docs/Grid.jpg" alt="Jeux du Memory en cours" />
</div>

Pour tester les compétences `React/Typescript` et d'intégration `HTML/CSS/SASS`, vous développerez un jeux de type [Memory](https://fr.wikipedia.org/wiki/Memory_(jeu)).

## Prérequis

* [React](https://reactjs.org/) - v.16 minimum
* [Typescript](https://www.typescriptlang.org/)
* [SCSS](https://sass-lang.com/)
* Les librairies de composants tel que `Bootstrap`, `MaterialUI` sont déconseillées. Pour le reste vous êtes libre d'utiliser les outils qui vous paraissent les plus adaptés.

---

## Composants

### Grille

![Grille du Memory](/assets/images/.docs/components/Grid.jpg)

Une grille `4x4` qui a pour contenu les cartes du jeux.

### Carte

![Carte verso](/assets/images/.docs/components/Card/Recto.jpg)
![Carte verso](/assets/images/.docs/components/Card/Verso.jpg)
![Carte verso](/assets/images/.docs/components/Card/Found.jpg)

La carte a deux faces : 
* `recto` : background blanc uni,
* `verso` : une image devant être associée à une paire.

A l'état initiale la carte ce trouve sur sa face recto.

**Action :**
* `click` -> Retourne la carte sur son verso. Si la carte cliqué est la première à être retournée de la partie, alors lancer le `Timer`.

### Timer

![Timer à zéro](/assets/images/.docs/components/Timer.jpg)

**Comportement :** Dès que l'utilisateur clique sur la première carte le `Timer` ce lance. 

### Compteur de clics

![Compteur de cliques](/assets/images/.docs/components/Counter.jpg)

**Comportement :** Dès que l'utilisateur clique sur deux cartes, alors le compteur est incrémenter d'un clique. 

### Reset

![Button reset](/assets/images/.docs/components/Reset.png)

Un bouton permettant de réinitialiser la grille et de remélanger les paires, réinitialise le `Timer` et le `Compteur`.

**Action :** 
* `click` -> Réinitialise la partie en cours. Si aucune partie n'est en cours, alors le bouton doit être désactivé.

---

## Bonus

Dans un soucis d'accessibilité, la grille doit être navigable avec le clavier et les carte peuvent être actionner avec les touches `entrée` et `espace`.

---

## Final

Pour nous envoyer le résultat, il vous suffira de créer une `pull-request` sur le repo Github.
