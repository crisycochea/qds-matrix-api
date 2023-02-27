FROM node:18-alpine as build
WORKDIR /usr/src/app
COPY package*.json tsconfig.*.json ./
copy . .
RUN npm install 
RUN npm run build


FROM node:18-alpine

WORKDIR /usr/src/app
COPY package*.json tsconfig.*.json ./
RUN npm install --omit=dev --ignore-scripts
COPY --from=build /usr/src/app/dist/ ./dist

CMD ["node", "./dist/src/main.js"]
