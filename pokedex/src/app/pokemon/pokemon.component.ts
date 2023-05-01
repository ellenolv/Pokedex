import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  title = 'pokemon';
  pokemon : Pokemon = {} as Pokemon;
  id : number = 1;

  constructor(private PokemonService: PokemonService){}

  anterior(){

    if(this.id > 1){
      this.id --;
    }
    else{
      this.id = 1008;
    }

    this.loadPokemon(); //PRECISA CHAMAR A FUNÇÃO LOAD PARA ATUALIZAR O VALOR DO ID

  }
  proximo(){
    if(this.id < 1008){
      this.id ++;
    }
    else{
      this.id = 1;
    }

    this.loadPokemon();
  }

  ngOnInit(): void { //inicialização do componente
    this.loadPokemon(); //PRECISA CHAMAR A FUNÇÃO LOAD PARA ATUALIZAR O VALOR DO ID
  }


  loadPokemon() { //chamada ao service
    this.PokemonService.getpokemonByID(this.id).subscribe(
        {
          next: pokemon => this.pokemon  = pokemon // this.sog -> dog do componente | dog é o que veio do observable
        }

      ); //retorna um observable, e é necessário subscribe esse observable
  }

  getImage(): string {
    // return `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
  }

  getPokemonAbilities(){
    return this.pokemon.abilities.map(a => a.ability.name).join(' | ');
  }
 

}
