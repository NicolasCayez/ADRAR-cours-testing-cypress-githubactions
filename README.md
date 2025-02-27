# Procédure

## Étape 1:
Vous allez partir sur un projet tout neuf pour vous entrainer.
Pour nous faciliter encore un peu plus la vie, nous allons utiliser un script qui va nous permettre de personnaliser nos divers éléments (nom de projet, variables d'environnements, ...).

1. Téléchargez le contenu de ce *repository* à l'aide de la commande `git clone https://github.com/MarceauAdrar/github_testing master` si le projet n'existe pas, sinon `git pull https://github.com/MarceauAdrar/github_testing master` si vous l'aviez déjà téléchargé auparavant (pour les appareils moins tolérants ou ne prenant pas en charge le sh, vous pouvez télécharger le contenu sur la branche `base` avec la commande `git clone https://github.com/MarceauAdrar/github_testing base`.
2. Déplacez le fichier `script.sh` dans le dossier *www* de Wamp ou *htdocs* de XAMPP.
3. Ouvrez un terminal de commande à l'endroit où se trouve ce fichier et tapez la commande suivante: `sh script.sh`
   - Cette commande va lancer le script !
   - Vous devriez avoir ceci:<br>
     ![image](https://github.com/user-attachments/assets/439cf872-f61d-4881-9706-b8c92ba2d1e0)
   - Saisissez les informations demandées (**sans espace**, **ni accent**) nom de votre projet, nom de la BDD, utilisateur BDD, MDP utilisateur BDD, l'hôte (devrait être: localhost), le chemin **complet** de votre dossier (une erreur peut apparaitre, vérifiez si le dossier s'est créé.
   - Une fois le projet ouvert dans VScode, vous devriez avoir quelque chose de semblable à ceci:<br>
     ![image](https://github.com/user-attachments/assets/b12a3b2d-554c-42df-bde9-c3f21d83c05f)

## Étape 2: ([`télécharger`](<https://github.com/MarceauAdrar/github_testing/tree/step02>))
Vous allez mainteant devoir télécharger et installer notre dépendance `Cypress` qui va nous servir de librairie de tests.

Tapez la commande suivante: `npm init -y`: cela va initialiser un repository pour gérer les dépendances (un peu comme composer), un fichier `package.json` va être créé à la racine du projet.
Ensuite, tapez ceci: `npm install -D cypress`
Une fois la dépendance installée, vous devriez avoir ce contenu dans le fichier<br>
![image](https://github.com/user-attachments/assets/37212109-a758-4d37-a42e-8ab18dc6574b)<br>
Changez le contenu de la clé "test" dans "scripts" vers ceci:<br>
![image](https://github.com/user-attachments/assets/26c9aae7-524a-4847-945f-0aa8c8e352e3)

## Étape 3: ([`Lancer un test`](<https://github.com/MarceauAdrar/github_testing/tree/step03>))
Maintenant que toutes nos bibliothèques sont installées, nous pouvons lancer d'autres commandes !
Tapez `npm run test`: cette commande lance la commande sous l'*alias* "test" dans les "scripts" de notre fichier `package.json`.
Vous devriez avoir:
- la console qui est occupée et retourne les logs ![image](https://github.com/user-attachments/assets/081f7fd7-4f57-4751-aada-2ef0d3740b02)
- une fenêtre Cypress qui apparaît ![image](https://github.com/user-attachments/assets/91ade535-ce77-4734-986d-c5ee7cbab79b)

Nous allons maintenant générer notre premier test:
1. Cliquez sur E2E Testing<br>
![image](https://github.com/user-attachments/assets/a7aef1d2-9244-4efe-af46-94d0f2feae2b)
2. Cliquez sur "Continue"
3. Lancez le test avec un navigateur (ex. Chrome)
4. Une nouvelle fenêtre "contrôlée" vient s'ouvrir<br>
![image](https://github.com/user-attachments/assets/dbbe19cf-b3a0-49b6-9943-3139aadced11)
5. Cliquez sur "Create new spec"<br>
![image](https://github.com/user-attachments/assets/b2815bb8-604d-4b56-9414-3b41b41e311d)
6. Donnez lui un nom (**ne changez pas le chemin**), ici nous allons l'appeler `spec.cy.js`<br>
![image](https://github.com/user-attachments/assets/007d1f9b-f891-414f-b2bb-d672eb18b3b5)<br>
et hop ! Notre test (très basique) a été généré, nous pouvons maintenant le personnaliser sur l'interface proposée, ou directement depuis VScode en ouvrant le fichier `cypress\e2e\spec.cy.js` !<br>
![image](https://github.com/user-attachments/assets/1b680771-a402-46a0-b285-03ed36d13280)<br>

Lancez le test et regardez ce qu'il se passe !

## Étape 4: ([`Créer un test E2E`](<https://github.com/MarceauAdrar/github_testing/tree/step04>))
⚠️ Pensez à adapter le projet pour que la suite soit fonctionnelle ! ⚠️<br>
Ajoutez des objets et une connexion à la BDD<br>
Ci-contre, le MCD:<br>
![image](https://github.com/user-attachments/assets/0e78c880-4067-44c2-b02e-ae0fd6032021)<br>
Si vous avez des soucis, vous pouvez utiliser le fichier [`github_testing.sql`](<https://github.com/MarceauAdrar/github_testing/blob/step04/App/Utils/github_testing.sql>) pour créer la BDD.

Une fois que cela est fait, utilisez la documentation de Cypress pour:
- donner un nom au test
- aller sur la page du formulaire
- remplir les champs du formulaire
- envoyer le formulaire
Tout cela, de manière AUTOMATISÉE lorsque vous lancez le test.

<details>
  <summary>👮⚠️<strong>Spoiler</strong>⚠️👮 du résultat, cherchez dans la doc si ce n'est pas encore fait.</summary>

  Et voici une proposition de réponse à adapter à chaque cas !
  
  ```js
  // /cypress/e2e/formulaire.cy.js
  describe('Test formulaire d\'ajout', () => {
    it('passes', () => {
      cy.visit('http://localhost/github_testing/addUser')
      cy.get('input[name="nom"]').type('DOE')
      cy.get('input[name="prenom"]').type('John')
      cy.get('input[name="mail"]').type(Math.random().toString(36).substring(2, 15) + '@gmail.com')
      cy.get('input[name="mdp"]').type('!P4sSw0rD!')
      cy.get('input[type="submit"]').click()
      cy.get('#msgzone').should('contain', "Le compte a été ajouté en BDD")
    })
  })
  ```
  Pour résumer: 
  1. Le bloc `describe`
     - `describe` est utilisé pour regrouper des tests de manière logique. C'est une fonction permettant de décrire une suite de tests.
     - `Test formulaire d'ajout` est le nom donné à cette suite de tests. Il s'agit simplement d'une description pour identifier le bloc de tests.
     - Le deuxième argument est une fonction de callback où l'on va définir les tests.
  2. Le bloc `it`
     - `it` est utilisé pour définir un cas de test. Chaque `it` correspond à un test individuel.
     - `'passes'` est une description pour le test, indiquant ce que le test est censé vérifier.
     - Le deuxième argument est une fonction de callback contenant le code du test lui-même.
  3. La visite de la page
     - `cy.visit()` permet de naviguer vers une URL donnée.
     - Ici, `http://localhost/github_testing/addUser` est l'URL à laquelle Cypress accède pour exécuter le test.
     - Les valeurs possibles pour `cy.visit()` incluent toute URL accessible par l'application à tester (généralement en local ou sur un environnement de test).
  4. La sélection + interaction champs du formulaire
     - `cy.get()` sélectionne un élément du DOM selon le sélecteur CSS fourni.
     - `input[name="nom"]` cible un champ input dont l'attribut `name` vaut `nom`.
     - `.type('DOE')` simule la saisie de texte dans l'élément sélectionné.
     - Valeurs possibles :
       - Pour `cy.get()`, on peut utiliser n'importe quel sélecteur CSS valide, comme `.class`, `#id`, ou des sélecteurs d'attributs comme `[type="text"]`.
       - Pour `.type()`, la valeur dépend du texte que l'on veut entrer. Ici, `'DOE'` est entré comme nom de famille, mais cela pourrait être n'importe quelle chaîne de caractères.
  5. Adresse email
     - Sélectionne le champ email via `input[name="mail"]`.
     - `.type('DOE')` simule la saisie de texte dans l'élément sélectionné.
     - `Math.random().toString(36).substring(2, 15)` génère une chaîne aléatoire de caractères. L'email généré aura une partie d'aléatoire suivie de `@gmail.com` pour éviter les doublons.
  6. Soumission du formulaire
     - `input[type="submit"]` cible le bouton de soumission du formulaire.
     - `.click()` simule un clic sur l'élément sélectionné.
     - Les valeurs possibles pour `cy.visit()` incluent Tout élément cliquable (`button`, `a`, `input`, etc.) peut être ciblé avec `cy.get()`.
  7. Vérification du retour
     - `.should('contain', "Le compte a été ajouté en BDD")`
        - `.should()` est une méthode de Cypress utilisée pour faire des assertions, c’est-à-dire vérifier que certaines conditions sont remplies.
        - `'contain'` est l'un des types d'assertions possibles avec `.should()`. Ici, il vérifie que le texte de l'élément sélectionné contient une certaine chaîne de caractères.
        - `"Le compte a été ajouté en BDD"` est la chaîne de caractères attendue.
</details>

## Étape 5: ([`Historiser un test E2E`](<https://github.com/MarceauAdrar/github_testing/tree/step05>))
Souvent, lorsque nous lançons des tests, il peut-être difficile de voir où cela a planté. C'est pourquoi, nous allons modifier notre test pour ajouter un enregistrement dans la table `tests` à l'issue de celui-ci.

<details>
  <summary>👮⚠️<strong>Spoiler</strong>⚠️👮 Vous pouvez essayer de votre côté avant de regarder la solution</summary>

  Et voici une proposition de réponse à adapter à chaque cas !
  
  ```js
  // /cypress/e2e/formulaire.cy.js
  describe('register', () => {
     it('addUser', () => {
       cy.visit('http://localhost/github_testing/addUser')
       cy.get('input[name="nom"]').type('DOE')
       cy.get('input[name="prenom"]').type('John')
       cy.get('input[name="mail"]').type(Math.random().toString(36).substring(2, 15) + '@gmail.com')
       cy.get('input[name="mdp"]').type('!P4sSw0rD!')
       cy.get('input[type="submit"]').click()
       cy.get('#msgzone').invoke("text").then((text => {
         //paramétre JSON (nom du test, date, statut)
         const name = 'addUser';
         let date = new Date()
         date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
         const url = "http://localhost/github_testing/api/addTest"
         let json = '';
         if (text == "Le compte a été ajouté en BDD") {
           const valid = true
           json = JSON.stringify({ name: name, valid: valid, date: date })
         } else if (text == "Les informations sont incorrectes") {
           const valid = false
           json = JSON.stringify({ name: name, valid: valid, date: date })
         }
         cy.request({
           method: 'POST',
           url: url,
           body: json,
         });
       }))
     })
   })
  ```

On retrouve essentiellement le contenu déjà vu. Nous l'avons légérement modifié et ajouté du contenu pour effectuer une requête sur notre route `api`. Ainsi, nous enregistrons dans la variable `name` le nom du test, on génère sa date d'exécution et on JSON-ifie le tout pour l'envoyer à l'aide de la méthode `cy.request()` qui prend un tableau d'éléments comme le ferait une requête AJAX (c'est le même principe): la méthode, l'url et le contenu du body (ici, le JSON).<br>
De la sorte, si on lance le test, on tombera sur le cas où le compte se créé (vu qu'on génére aléatoirement l'email) et si jamais l'email existe déjà, on enregistrera le fait que le test ne s'est pas bien déroulé.
</details>

## Étape 6: ([`Tests Cypress automatique`](<https://github.com/MarceauAdrar/github_testing/tree/step06>))
Cypress nous offre la possibilité de lancer également les tests de façon totalement automatisée en lançant la commande suivante: `./node_modules/.bin/cypress run --browser chrome`
Cette commande lancera **cypress** et affichera un compte rendu comme ci-après:<br>
![image](https://github.com/user-attachments/assets/9fe6f593-e53c-49e3-9f3e-c3a6fb322877) ![image](https://github.com/user-attachments/assets/68017d73-0173-403b-9710-28eeb9319289)<br>
![image](https://github.com/user-attachments/assets/669a027f-9b82-4757-8a01-6295e4b725e0)<br>
Vous avez également la possibilité de prendre une capture **vidéo** de l'action ce qui peut permettre de plus facilement comprendre ce qui s'est passé, il suffit pour cela de changer la configuration dans le fichier `cypress.config.js`:<br>
```js
// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
});
```
Après modification, vous devriez avoir la vidéo de vos tests qui se retrouvent dans le dossier `cypress/videos/`.
![image](https://github.com/user-attachments/assets/7c565169-21ec-4c73-89a1-71417d9e6db0)

Nous allons créer un nouvel alias `auto_test` pour lancer cette commande dorénavant:<br>
```json
// package.json
{
  "name": "github_testing",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "cypress open",
    "auto_test": "cypress run --browser chrome"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "cypress": "^13.15.0"
  }
}
```
Vous pourrez mainteanant lancer la commande `npm run auto_test` pour avoir un résumé des tests lancés !

## Étape 7: ([`Intégration Cypress x Github Actions`](<https://github.com/MarceauAdrar/github_testing/tree/step07>))
Nous allons maintenant faire en sorte de combiner Cypress avec Github. Le but sera de créer un workflow qui va lancer nos tests à chaque **pull** sur le repository.

### *Workflow* CI/CD
Effectuer des tests **CI/CD** réduit les erreurs de code et les problèmes. Il va permettre d'autoriser le push si et seulement si les tests sont validés ! Pratique, non ?

Cette fois, cela se passera sur **VOTRE** repository Github<br>
![image](https://github.com/user-attachments/assets/c370a9a8-5ee4-4386-9a80-a18f00de6074)<br>
![image](https://github.com/user-attachments/assets/3666a9b4-3cf7-49cf-804a-b211a05ae938)<br>
Si tout se passe bien, vous devriez être en train d'éditer un nouveau fichier `main.yml` qui se trouve dans `.github/workflows/`
Donc maintenant, automatique, et à chaque push, j'aurais ce résultat:<br>
![image](https://github.com/user-attachments/assets/436e3136-9420-4303-bb2e-2bb94e6891fb)<br>
Sinon j'aurais ceci:<br>
![image](https://github.com/user-attachments/assets/f9aa6a06-69eb-46ad-85d3-129845a8b2e0)<br>
Je peux également avoir le détail en cliquant sur l'élément:<br>
![image](https://github.com/user-attachments/assets/c79a1d6e-a767-43f0-95bc-6db7cc6dd499)<br>
![image](https://github.com/user-attachments/assets/ae2af0d5-6b71-4878-9e5a-557799051b56)<br>

Et voilà, il ne reste maintenant plus qu'à pratiquer ! :D
