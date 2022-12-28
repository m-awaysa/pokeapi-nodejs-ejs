import got from 'got';
//template ejs
import ejs from 'ejs';
//import express
import express from 'express';
//initialize object
const app = express();
//view engine
app.set('view engine', 'ejs');


var pokemons = [];
let data;
//for loop for calling api is bad and a lot of api doesn't support it  but PokeAPI didn't mind that
for (let i = 1; i < 20; i++) {
  data = await got.get('https://pokeapi.co/api/v2/pokemon/' + i + '').json();
  pokemons.push(data);
}


app.get('/index', (req, res) => {

  res.render('index', { pokemons });
});
app.listen(3000);