# Strapi CMS: Books & Cars

Nu återanvänder vi oss av våra böcker och bilar från tidigare uppgifter och kör ett exempel där vi låter Strapi agera som vår databas men att vi sköter allt annat själva i vårt eget API.

Vi ska bygga ett API med hjälp av Express som vi integrerar med Strapi.

Böcker ska ha egenskaperna (låt Strapi sköta ID):
1. isbn: number (integer)
2. title: string
3. summary: string (multiline)
4. price: number (float)

Bilar ska ha egenskaperna (låt Strapi sköta ID):
1. make: string
2. model: string
3. price: number (float)

Skapa routes för books och cars, alla CRUD-operationer ska kunna köras.