# Övning 1

## Instruktioner

I denna uppgift ska du läsa koden i både `js` och `ts` och försöka förstå vad som händer.

Innan du börjar jobba så kör `npm i` när du står i `assignment_1`

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

När du bildat dig en uppfattnig om vad som sker ska du göra följande:

1. Lägg till en ny fil med namn "books.ts" i `ts`
2. Skapa ett interface som heter `IBook` som innehåller `ISBN` som string, `id` som number samt `title` som string
3. Se till att ditt interface exporteras
4. Skapa en array med books vars items har typen IBook och exportera den
5. Importera `books` och `IBook` i index.ts
6. Skapa en route some servar alla books som heter `/books` (en GET-metod ska användas)
7. Skapa en route som server EN bok baserat på id som heter `/books/:id` (GET igen)
8. Skapa en route som skapar en ny bok, se cars-exemplet i index.ts (POST ska användas här + en ny id-funktion kanske måste skapas/modifieras)
9. Gör om alla steg men i `js` och utvärdera skillnader och likheter. Vad är styrkorna med js respektive ts?