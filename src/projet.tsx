/*import React, { FC } from 'react';

// Définir une interface pour les props
interface GreetingProps {
  name: string; // Le prop "name" est une chaîne de caractères
}
// Déclarer le composant fonctionnel avec des types
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name} !</div>;
};
export default Greeting;
*/
// Importation des modules nécessaires depuis React
import React, { Component } from 'react';

// Définition d'une interface pour typer l'état du composant
interface CounterState {
  count: number; // L'état contient une propriété "count" de type number
}

// Définition de la classe Counter avec typage pour React.Component
// Le premier type générique représente les props (ici vide), le second représente l'état (CounterState)
class Counter extends Component<{}, CounterState> {
  // Initialisation de l'état avec la structure définie par l'interface CounterState
  state: CounterState = {
    count: 0, // La valeur initiale de "count" est 0
  };

  // Méthode pour incrémenter la valeur de "count" dans l'état
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); // Mise à jour de l'état
  };

  // Méthode de rendu pour afficher le composant
  render() {
    return (
      <div>
        {/* Affichage de la valeur actuelle du compteur */}
        <p>Count: {this.state.count}</p>
        {/* Bouton qui appelle la méthode "increment" lorsqu'il est cliqué */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Exportation par défaut du composant Counter
export default Counter;

