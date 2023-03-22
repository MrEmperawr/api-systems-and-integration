# api-systems-and-integration

## Övningar

Detta repo innehåller övningar och kursmaterial för kursen *Systemstöd och integrationer med tredjepartssystem*

Alla övningar har sina egna instruktioner och innehåller grundkod och projektstruktur som man enkelt kan hämta hem till sen egen maskin.
Något man gör första gången i denna kurs är när du börjar jobba för att jobba med samtliga uppgifter är att skapa sin egen branch. Det gör man enkelt genom att skriva:

`git checkout -b "namn-efternamn-assignment-x"` ELLER `git checkout -b "mobnamn-assignment-x"`

Vill man ha en egen branch så skapar man en egen men det går bra att jobba tillsammans som en mob hela kursen.

Där "x" står för vilken övning det rör sig om.

### Lathund

För att typescript ska funka behöver du skriva: `npm install -g ts-node typescript '@types/node'` som installer ts-node m.m.

För att köra typescript-filer behöver du använde `ts-node` istället för bara `node`

1. Klona repot
2. Kliv in i katalogen med ditt repo - använder du terminal så är det `cd api-systems-and-integration` givet att du står i katalogen du klonade i, om inte måste du först gå dit.
3. Skapa en branch med kommandot `git checkout -b "namn-efternamn-assignment-x"`
4. Kliv in i en övning genom att köra kommandot `cd assignment_x` där x står för vilken uppgift det rör sig om t.ex. `cd assignment_1`
5. Börja koda!

### Problem?

- OM ts-node eller nodemon inte fungerar TROTS att ni har installerat det globalt med `npm i -g ts-node nodemon` så kan ni göra följande:
1. Lägg till detta i VARJE `package.json` för `assignment_x`
`"devDependencies": {
    "@types/express": "^4.17.17",
    "@types/node": "^18.15.5",
    "@types/uuid": "^9.0.1",
    "nodemo": "^1.0.0",
    "ts-node": "^10.9.1",
    "tsx": "^3.12.6",
    "typescript": "^5.0.2"
  }`

Se till att det läggs till i er packag.json så det då ser ut ungefär så här:
`
{
  "name": "node_express_api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "tsx watch ts/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {                     <----- Ska ligga som en nyckel i din package.json
    "@types/express": "^4.17.17",
    "@types/node": "^18.15.5",
    "@types/uuid": "^9.0.1",
    "nodemo": "^1.0.0",
    "ts-node": "^10.9.1",
    "tsx": "^3.12.6",
    "typescript": "^5.0.2"
  }
}

`

Springer du in i problem så gör följande:
1. Läs feldmeddelandet och googla dig fram till en lösning.
2. Prata med dina mobmedlemmar och försök lös problemet tillsammans.
3. Ryck tag i Marcus och utkräv hämn... svar på dina frågor.

## Resurser

### Node & Express (Vecka 12 & 13)
- https://youtube.com/playlist?list=PLurIMwd6GdCi3ssXNAcjZ2l5mYaTfYPhf
- https://www.linkedin.com/learning/node-js-essential-training-2
- https://www.linkedin.com/learning/learning-npm-the-node-package-manager-2018
- https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3
- https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express

### Autentisering (Vecka 13)
- https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis2
