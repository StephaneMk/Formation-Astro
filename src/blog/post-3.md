---
title: Mon projet d'architecture des systèmes d'information
author: Moïse Stéphane KINYOK
description: "De l'analyse des besoins à la création d'une application web connectée à MySQL."
image:
    url: "/images/eseo-developpement-4k.jpeg"
    alt: "Photographie d'un environnement de développement logiciel affichant du code sur plusieurs écrans."
logo:
    url: "/images/eseo.svg.png"
    alt: "Logo de l'ESEO."
pubDate: 2026-08-26
tags: ["systèmes d'information", "merise", "mysql", "django"]
---
Ce projet avait pour objectif de concevoir un système d'information complet, depuis l'analyse des besoins jusqu'à l'affichage des données dans une application web.

## Analyse et modélisation

J'ai commencé par analyser les besoins, puis j'ai modélisé les données aux niveaux conceptuel, logique et physique avec la méthode MERISE. Cette étape m'a aidé à organiser clairement les informations avant de créer la base de données.

## Conception de la base MySQL

J'ai créé une base MySQL avec des clés étrangères, des index et des contraintes d'intégrité. J'ai également utilisé des requêtes avancées comme `JOIN`, `GROUP BY` et les fonctions de fenêtrage pour produire différentes analyses.

## Développement de l'application web

J'ai développé une interface web avec Django et PHP afin d'exécuter les requêtes SQL et d'afficher les résultats de manière dynamique. Des procédures stockées et des déclencheurs ont permis d'automatiser certains traitements.

Enfin, j'ai sécurisé les échanges avec la base de données contre les injections SQL. Ce projet m'a permis de comprendre comment la modélisation, le développement et la sécurité travaillent ensemble dans un système d'information.
