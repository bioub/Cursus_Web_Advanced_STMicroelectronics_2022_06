# Exercices

## Fetch

Au submit du formulaire envoyer la requête vers l'API REST (à démarrer au préalable avec `yarn start:dev`) :

```
POST /api/todos HTTP/1.1
Content-Type: application/json

{
    "title": "Votre valeur saisie",
    "completed": false
}
```

(l'entête `Content-Type: application/json` est essentiel pour le middleware `express.json()`)

## Tests Automatisés

Vérifier que `TodoItem` fasse bien le rendu de la prop `todo`.

Vérifier qu'au submit du formulaire dans `TodoForm` la prop `onAdd` soit bien appelée.
