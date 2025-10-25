---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Super Binette"
pubDate: 2025-10-25
description: "Projet Unity troisième année de BUT Informatique"
contributors:
  ["Matteo Rauch", "Anthony Michaud", "Kevin Pradier", "Jeremie Larue"]
image:
  url: "/projects/superbinette.png"
  alt: "Écran du jeu Super Binette"
skills: ["csharp", "unity", "git", "aseprite"]
links:
  - label: "github"
    url: "https://github.com/Sorax5/MLPStudio_SuperBinette"
---

## Présentation

**Super Binette** est un jeu de simulation de jardinage en 2D (top-down) développé en Unity dans le cadre d'un projet tutoré de troisième année de BUT Informatique. Le joueur incarne une **petite binette** chargée d'entretenir un jardin : planter, arroser et protéger les plantes des nuisibles.

## Principales fonctionnalités

- Cycle jour / nuit
- Conditions météorologiques variables (pluie, neige, vent)
- Calendrier et saisons
- Système de construction pour améliorer le jardin

## Mes contributions

- Conception et réalisation de sprites : blocs au sol, grillages, eau
- Interfaces utilisateur : menus et éléments HUD
- Gameplay : génération procédurale du terrain (lac et sol), système de sauvegarde du jardin, gestion des saisons et de la météo
- Effets météorologiques : création d'un _shader_ personnalisé pour la neige (accumulation sur surfaces horizontales), ajout de particules pour la pluie et ajustements de l'éclairage selon la météo
- Architecture technique : mise en place d'une structure en **MVC** (Model-View-Controller) et d'un système d'événements pour faciliter la communication entre modules

## Technologies et outils

- Unity (C#)
- Git pour la gestion de versions
- Aseprite pour les assets 2D
- Concepts utilisés : MVC, shaders, systèmes de particules, génération procédurale

## Méthodologie

Nous avons travaillé en **méthodologie agile** avec des sprints d'une semaine pour planifier et suivre notre progression. Les itérations de développement étaient accompagnées de démonstrations régulières auprès de notre encadrant, qui fournissait des retours et des demandes d'ajustements.

## Résultats

Notre travail a été bien accueilli : l'équipe a obtenu la note de 18/20 pour ce projet. Le jeu a été présenté lors des portes ouvertes de l'**IUT de Dijon**, où il a suscité un fort intérêt auprès des visiteurs.
