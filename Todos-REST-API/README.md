# Exercice Express + Mongo

Un user est défini par un username et un password

Reprendre le code de todos et créer 3 routes pour users

- GET /api/users pour lister les utilisateurs (ne pas afficher le password)
- GET /api/users/:id pour lister les utilisateurs (ne pas afficher le password)
- POST /api/users pour créer un utilisateur

Adapter auth/controllers pour vérifier que le user existe en base.

