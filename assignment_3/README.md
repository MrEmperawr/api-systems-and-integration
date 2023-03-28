# Övning 3

## Instruktioner

I denna uppgift ska du läsa koden i både `js` och `ts` och försöka förstå vad som händer.

Innan du börjar jobba så kör `npm i` när du står i `assignment_3`

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

Gör följande (i antingen JS/TS eller både och):

1. Lägg till en egenskap hos spelen, kan vara vadsomhelst. T.ex. "rating". Alla spel ska uppdateras med detta värde.
2. Skapa en en `GET`-funktion som hämtar en bil baserat på din nya egenskap. Finns inte någon bil med egenskapen du söker efter så ska du svara med en 404-status.
3. Skapa en `GET`-funktion som hämtar ett spel baserat på `id`. Finns inte modellen ska du svara med en 404.
4. Skapa en `GET`-funktion som hämtar ett spel baserat på `release_date`. Finns inte modellen ska du svara med en 404.
5. Gör om alla steg i TS eller JS, beroende på vad du började med.

### Extra

Skapa html-vyer i handlebars där man kan se spelen! Titta på `assignment_2` för inspiration och använd samma/liknande struktur för dina handlebars-filer för att enkelt komma igång.

### Läsning

Läsa och skriva filer i Node: https://blog.logrocket.com/reading-writing-json-files-nodejs-complete-tutorial/



