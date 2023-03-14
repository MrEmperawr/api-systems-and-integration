# Gruppövning 1

## Del 1

 Innan vi börjar med det roliga så ska vi ta oss igenom ett teoretiskt moment först.

 I lektion 2 och 3 gick vi igenom Protokoll och grunderna i kommunikation över nätet.

 Det är nu er mobs uppgift att skapa en presentation där ni besvarar och diskuterar följande frågor:

 1.  Vad är den primära skillnaden mellan REST och SOAP? (Hint: ligger i P:et i SOAP) Beskriv kortfattat båda dessa koncept.
 2.  Vad är fördelarna med SOAP och vad är fördelarna med REST? När bör man använda det ena över det andra? Vilka dataformat stödjer respektive sätt att jobba med HTTP?
 2.  Beskriv likheter och skillnader med XML och JSON, vad är fördelen med det ena formatet över det andra? Vad är vanligast idag?
 3.  Redogör för vad ett API är och vad det ***inte*** är. Ge tydliga exempel på vad ett API är, gärna med exempel från egen kod. Men det går bra att exemplifiera på andra sätt.
 4. Redogör kort hur man använder GraphQL och hur det skiljer sig från REST. Ta även upp det som GraphQL delar med REST.


## Del 2

Nu äntligen får vi koda!

Ni ska skapa er egna fullstack-applikation likt den vi jobbade med i `assignment_2`.

Istället för bilar ska ni skapa en sida som handlar om filmer - ELLER - vad ni vill! Så länge det tydligt framgår vad det rör sig om.

Er mob har fria tyglar att skapa något kul där ni kan sätta er egen prägel men resten av instruktionerna kommer utgå från just "filmer", men gör ni något annat så applicerar ni instruktionerna på ert eget exempel.

För fullföljande av uppgiften ska ni göra följande:
    - Appen ska vara skriven i Typescript
    - Appen ska använda sig av Handlebars för att rendera (OBS - om ni känner att ni vill så kan ni bygga med React istället)
    - Ha en startsida (home page) för er app.
    - Visa en lista på era filmer (eller vad ni nu väljer)
    - Visa en specifik film med filmens detaljer
    - Ni får styla så lite eller så mycket ni vill med CSS
    - Ert API ska använda express för att skapa endpoints
    - Ert API måste kunna serva många/alla filmer, en film ska ha ett interface
    - Ert API ska kunna serva en film

Ni ska sedan som mob presentera er app!

Er presentation ska vara mellan 5 och 10 minuter där ni går igenom funktionaliteten och visar delar av er kod som ni tyckte var extra svårt, roligt eller intressant att ta itu med.

### Hjälpsamheter
För en tutorial i handlebars kan ni gå till `assignment_2` och/eller läsa denna artikel om [Handlebars](https://www.sitepoint.com/a-beginners-guide-to-handlebars/).
[Här](https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/) finns ett exempel på hur man bygger med ett api i TS med express.

