# Installationsguide för Strapi

För att koma igång med strapi så följ deras exempel som börjar här:
https://strapi.io/

Deras guide föra att komma igång hittar ni här:
https://docs.strapi.io/dev-docs/quick-start#_1-install-strapi-and-create-a-new-project

## Installera Strapi steg för steg

Här kommer en breakdown, stegvis, i hur man går till väga för att starta ett Strapi-projekt:

1. Kör kommandot: `npx create-strapi-app@latest my-project --quickstart`
Med --quickstart så sätts alla defaults till det Strapi rekommenderar. Det som händer är att du tar hem ett Strapi-projekt som i mångt och mycket kan liknas med vad som händer när du kör `npx create-react-app`. All kod för att komma igång med ett Strapi-projekt laddas ned i den mapp du står i.

2. När installationen är klar så kommer Strapi öppna en webbläsarflik åt dig (precis som när react startar sin development server och en flik öppnas med ditt react-projekt) där du välkomnas av en inloggningssida. Härifrån kan du skapa ett konto som lagras i din lokala databas, som Strapi sköter om, som hör till din utvecklingsmiljö på din dator. Skapa ett inlogg!

3. Nu när du skapat ett inlogg så kommer du genom klienten i webbläsaren kunna logga in och komma åt dashboarden (i webbläsaren kan du gå till http://localhost:1337/admin/ för att komma åt det grafiska gränssnittet).

4. I dashboarden kan du nu se i menyn till vänster alternativen "Content Manager", "Content-Type Builder", "Settings" m.m. Gå in i Content-Type Builder och skapa din första content type! Exempelvis kan du skapa en collection vi kan kalla för  "Movie". Tryck på "Create new collection type" så får du upp en meny där du väljer vilka fält som ska finnas med i datatypen. Vår Movie kan ha  `title` (Text short), `synopsis` (Text long), `rating` (Number integer), `release_date`(Date) och `director`(Text short) som fält.

5. När skapat dina content types kan du skapa innehåll i content managern. Klicka på "Content Manager" och välj "movie" bland "Collection Types", uppe till höger kan du trycka på "Create New Entry" om du gör det så dyker det upp en dialog där du specar vilka värden din film ska ha.

Lycka till!