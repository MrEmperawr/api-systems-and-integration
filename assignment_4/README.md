# Övningsuppift 4

Installera `ts-node` för att kunna köra ts-node istället för node för ts-filer.

1. Använd dig av och testa APIet som beskrivs i presentationen `4 Systemstöd och integration - auth-API` och återfinns här i `assignment_4`.
2. Bygg ett API som låter klienter spara och visa todos i en SQLITE-databas
    - En Todo har följande properties: Id (number), Title (text), done (true/false)
3. Lägg till kod som gör att endast inloggade användare kan anropa TODO-APIet
4. Gör om projektet med TS

### Databastips
Vill du se din databas i vscode?

Installera `sqlite` som vscode-plugin! Sök på `sqlite` i extensions marketplace och installera den som heter "Sqlite".
För att kunna se datat i din tabell kan du högerklicka på din .db-fil och köra "Open Database" då kommer datbasen dyka upp som en flik i din vscode explorer.

Testa ditt API med hjälp av Postman!

## Tips för TS-projektet

Skapa interfaces för accounts och todos så de blir typade. TS är redan installerat från roten av av det här repot så du behöver inte configa det själv.
Du kommer behöva installa npm-moduler med `npm i`

Fundera på vad som vore skönt att ha typat, här kommer några förslag (fundera och diskutera varför):
1. Return values
2. Variabler
3. Funktionsparametrar

### Resurser
Info om JWT och autentisering: https://www.linkedin.com/learning/node-js-securing-restful-apis-2/securing-node-restful-apis?autoplay=true&u=57075785
Artikel om JWT: https://jwt.io/introduction
Artikel om hashning och kryptering [här](https://www.pingidentity.com/en/resources/blog/post/encryption-vs-hashing-vs-salting.html#:~:text=Hashing%20is%20a%20one%2Dway%20process%20that%20converts%20a%20password,to%20obfuscate%20the%20actual%20password.)
Kurs i (SQLite)[https://www.linkedin.com/learning/express-essential-training-14539342/using-express-with-a-database?autoplay=true&u=57075785]

### Vad är fördelar respektive nackdelar med TS?

Här finns lite material att läsa om för-och nackdelar:
https://medium.com/@BuildMySite1/what-is-typescript-pros-and-cons-8dc5cdc3e78d
https://tsh.io/blog/typescript-vs-javascript-comparison/
https://www.stxnext.com/blog/typescript-pros-cons-javascript/
