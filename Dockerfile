# Använd officiell Node.js-bild
FROM node:18

# Skapa appmapp
WORKDIR /app

# Kopiera package-filer
COPY package*.json ./

# Installera beroenden
RUN npm install

# Kopiera all övrig kod
COPY . .

# Exponera port
EXPOSE 3000

# Starta appen
CMD ["npm", "start"]
