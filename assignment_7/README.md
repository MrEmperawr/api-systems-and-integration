# Övningsuppgift 7

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

I denna uppgift ska vi arbeta med SWAPI (Star Wars API) och ***integrera*** den med vår egna tjänst. Den egna tjänsten gör inte så mycket mer än att man registrerar användare samt som användare kan man spara viss data.

När ni bygger detta API ska ni ha **Separation of Concerns** i åtanke, precis som vi jobbade med i övning 5. Det går att göra klart uppgiften genom att ha all kod i index.js/ts MEN för att bli duktiga mjukvaruingenjörer behöver ni tänka på er arkitektur. Man kan alltid börja med att skriva all kod i index.js/ts och sedan bryta ut det.

Detta projekt kräver lite databaslogik, kika i `assignment_4` och `assignment_6` (om du slutförde den) för inspiration. Läsning om sqlite och sql-kod finns [här](https://www.sqlitetutorial.net/sqlite-nodejs/)

I detta projekt finns det inga beroenden installerade och inga hjälpfiler att kika på. Så innan ni kommer igång enligt instruktionerna nedan behöver ni göra följande:

    - npm init -y
    - npm install express

Nu är ni redo!

1. Skriv ett Node JS-program som använder fetch för att göra följande anrop till SWAPI:
    - Hämta alla personer (/people)
    - Hämta alla planeter (/planets)
    - Hämta alla filmer (/films)
    - Hämta personen med ID 3
    - Hämta planeten med ID 59
    - Hämta filmen med ID 2
    - Implementera paginering för varje GET-endpoint (people/planets/films)

2. Skapa en databas (se `assignment_4` för inspiration) så du kan spara data, utöka nu funktionaliteten för ditt API så att man kan
    - Skapa användare **OBS** det räcker med att ni knyter användar-ID till personer/planeter/filmer utan att implementera inlogg
    - Som användare ska man kunna spara personer/planeter/filmer (så först behöver du/ni hämta en planet/person och sedan spara den åt användaren)
    - Som användare kan jag ta bort personer/planeter/filmer
