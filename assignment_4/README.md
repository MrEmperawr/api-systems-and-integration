# Övningsuppift 4

1. Använd dig av och testa APIet som beskrivs i presentationen `4 Systemstöd och integration - auth-API` och återfinns här i `assignment_4`.
2. Bygg ett API som låter klienter spara och visa todos i en SQLITE-databas
    - En Todo har följande properties: Id (number), Title (text), done (true/false)
3. Lägg till kod som gör att endast inloggade användare kan anropa TODO-APIet
4. Gör om projektet med TS

## Tips för TS-projektet

Skapa interfaces för accounts och todos så de blir typade. TS är redan installerat från roten av av det här repot så du behöver inte configa det själv.
Du kommer behöva installa npm-moduler med `npm i`

Fundera på vad som vore skönt att ha typat, här kommer några förslag (fundera och diskutera varför):
1. Return values
2. Variabler
3. Funktionsparametrar

### Vad är fördelar respektive nackdelar med TS?

Här finns lite material att läsa om för-och nackdelar:
https://medium.com/@BuildMySite1/what-is-typescript-pros-and-cons-8dc5cdc3e78d
https://tsh.io/blog/typescript-vs-javascript-comparison/
https://www.stxnext.com/blog/typescript-pros-cons-javascript/
