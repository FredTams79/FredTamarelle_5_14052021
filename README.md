# ![Orifurniture](./SRC/Orifurniture.png)

## Sommaire

1.[INTRODUCTION](#introduction)  
2.[INSTALLATION](#installation)  
3.[ARCHITECTURE GENERALE](#architecture-générale)  
4.[CARACTÉRISTIQUES TECHNIQUES](#caractéristiques-techniques)  
5.[COMPATIBILITÉ](#comptabilité)  
6.[CONTACT](#contact)

## INTRODUCTION

[Orifurniture](https://fredtams79.github.io/FredTamarelle_5_03052021/) est un site de vente de meubles en chêne :
Notre collection de meubles en chêne massif regroupe des tables à manger, des tables basses, des chaises, ...
Ils sont fabriqués avec du chêne français qui garantissent leur qualité. Ils sont disponibles en plusieurs modèles et conviennent à tous les styles de décoration.
**Orifurniture** fait parti du groupe **ORINOCO** comme Oribook et Oritextil.
![logo du groupe](./SRC/logoOrinoco.png)

[MVP complet ici](<https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P5/P5_Spe%CC%81cifications%20fonctionnelles%20Orinoco%20(2).pdf>)

## INSTALLATION

### Prérequis :

Vous devrez avoir `Node` et `npm` installés localement sur votre machine.

### Installation :

Clonez ce dépôt et à partir du dossier du projet, exécutez `npm install`. Vous pouvez ensuite exécuter le serveur avec `node server`. Le serveur doit fonctionner `localhost` avec le port par `défaut 3000`. Si le serveur fonctionne sur un autre port pour une raison quelconque, cela est imprimé sur la console au démarrage du serveur, par exemple `Listening on port 3001`.

## ARCHITECTURE GENERALE

Description de l'application :
Le site Orifurniture contient 4 pages.

    - une page d'"acceuil" ou de vue sous forme de liste : montrant tous les articles disponibles à la vente ;

    - une page "produit" : qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permet de personnaliser le produit et de l'ajouter à son panier ;

    - une page "panier"  :contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de texte dans les champs date ;

    - une page de "confirmation de commande" : remerciant l'utilisateur pour sa commande, et indiquant le prix total et l'identifiant de commande envoyé par le serveur.

## CARACTÉRISTIQUES TECHNIQUES

Le site a été réalisé avec **HTML5**, **CSS3**, **JavaScript** / _BOOTSTRAP_, _jQuery_.

## COMPATIBILITÉ

À ce jour, le site est compatible avec les dernières versions en date de _Chrome_ et _Firefox_.

## CONTACT

Vous pouvez joindre l'équipe d'Orifurniture par mail à cette adresse : **contact@orifurniture.com**.
Ou vous rendre sur le site : [Orinofurniture](https://fredtams79.github.io/FredTamarelle_5_03052021/)

> Ce site a été réalisé dans le cadre du projet 5 de la formation Développeur Web
> d'[Openclassrooms](https://openclassrooms.com/fr/paths/185-developpeur-web).
