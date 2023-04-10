# Övningsuppgift 9

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.
## STRAPI

Nu ska vi börja jobba med Wordpress, främst som vårt CMS (Content Management System).

Som ni har sett så finns det många olika CMS. Många nyare CMS använder GraphQL såsom Contentful eller Hygraph och fungerar inte exakt likadant som ett typiskt REST-API.

Strapi håller sig till REST-arkitektur och är ett väldigt vanligt verktyg som används där ute i det vilda.

Instruktioner:

1. Installera en lokal version av STRAPI på din dator (se lektion 9)
2. Skapa ett login när du startat igång strapi lokalt.
3. Gå till Content-Type builder i menyn till vänster, skapa två nya collection types (valfria namn och innehåll).
4. Gå till Content-Manager i menyn till vänster och lägg till några entries i dina två collections. ID skapas av Strapi, du bör inte skapa ett eget fält vid namn "ID" eller "id".
5. Gå till Settings -> Users & Permissions Plug -> Roles -> Public. Under "Permissions" finns dina collections, dessa behöver vara publika för att vi ska komma åt dem. Klicka i "select all" på dina två collections.
6. Gör nu en GET request i postman eller i din webbläsare. Exempelvis localhost:1337/api/todos. Kom ihåg att strapi körs på port 1337 by default.
7. Via postman ska du nu göra alla CRUD-metoder. Testa att skapa en todo (om du då t.ex. har skapat en collection "todos"), ta bort en, uppdatera en - testa även att hämta en entry i din collection med hjälp av id. Exempel: localhost:1337/api/todos/1

***Hur man kommer igång med STRAPI:***
Gå till https://strapi.io/
Kör: npx create-strapi-app@latest my-project i terminalen
Välj recommended option
Nu är du igång med din egen STRAPI-server!