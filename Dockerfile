FROM node:14

WORKDIR /express-test/
COPY package.json .
RUN npm install
COPY . .
CMD npm run dev
