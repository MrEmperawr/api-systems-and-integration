# Övning 3

## Instruktioner

I denna uppgift ska du läsa koden i både `js` och `ts` och försöka förstå vad som händer.

Innan du börjar jobba så kör `npm i` när du står i `assignment_3`

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

Gör följande (i antingen JS/TS eller både och):

1. Lägg till en egenskap hos spelen, kan vara vadsomhelst. T.ex. "rating". Alla spel ska uppdateras med detta värde. (Ni behöver INTE skriva en funktion som gör detta, ni kan handknacka in det i `games.json`)
2. Skapa en en `GET`-funktion som hämtar en bil baserat på din nya egenskap. Finns inte någon bil med egenskapen du söker efter så ska du svara med en 404-status.
3. Skapa en `GET`-funktion som hämtar ett spel baserat på `id`. Finns inte modellen ska du svara med en 404.
4. Modifiera vår `GET`-funktion `/games` som redan hämtar alla spel. Baserat på `release_date` ska funktionen istället returnera ett spel baserat på datumet. Finns inte modellen ska du svara med en 404. Du kommer behöva använda `query paramaters` för att lösa denna uppgift.
Hint: använd `req.query.realease_date` för att komma åt query-parametern.
Hint 2: Adressfältet kommer se ut ungefär så här: `localhost:8000/games/?release_date=1998-06-03`
5. Modifiera `/games` igen baserat på en query-parameter `rating` och returnera ett spel baserat på  denna nya query-paramter. Glöm inte att lägga till rating till games-objektet!
6. Gör om alla steg i TS eller JS, beroende på vad du började med.


### Extra

Skapa html-vyer i handlebars där man kan se spelen! Titta på `assignment_2` för inspiration och använd samma/liknande struktur för dina handlebars-filer för att enkelt komma igång.

### Läsning

Läsa och skriva filer i Node: https://blog.logrocket.com/reading-writing-json-files-nodejs-complete-tutorial/



