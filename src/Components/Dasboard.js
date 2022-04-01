import React from 'react';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe_book: {
        title: props.title,
        recipe: props.recipe,
        measure: props.measure,
        ingredients: props.ingredients
      }
    }
  }

  handleTitleChanged(event) {
    var recipe_book        = this.state.recipe_book;
    recipe_book.title  = event.target.value;

    this.setState({ recipe_book: recipe_book });
  }

  handleRecipeChanged(event) {
    var recipe_book      = this.state.recipe_book;
    recipe_book.recipe = event.target.value;

    this.setState({ recipe_book: recipe_book });
  }

  handleMeasureChanged(event) {
    var recipe_book    = this.state.recipe_book;
    recipe_book.measure = event.target.value;

    this.setState({ recipe_book: recipe_book });
  }

  handleIngredientsChanged(event) {
    var recipe_book    = this.state.recipe_book;
    recipe_book.ingredients = event.target.value;

    this.setState({ recipe_book: recipe_book });
  }

  handleButtonClicked() {
    console.log(this.state.recipe_book);
  }

  render() {
    return  (
      <div>
        <label>
          Title: 
        </label>
        <input type="text" value={this.state.recipe_book.title} onChange={this.handleTitleChanged.bind(this)}/>
        <br/>
        <label>
          Recipe:
        </label>
        <input type="text" value={this.state.recipe_book.recipe} onChange={this.handleRecipeChanged.bind(this)}/>
        <br/>
       
        <label value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}>
          Ingredient:
        </label>
        <input type="text" value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}/>
        <select value={this.state.recipe_book.measure} onChange={this.handleMeasureChanged.bind(this)}>
          <option value="1/4c">
            1/4c
          </option>
          <option value="1/2c">
            1/2c
          </option>
          <option value="3/4c">
            3/4c
          </option>
          <option value="1c">
            1c
          </option>
          <option value="1 1/4c">
            1 1/4c
          </option>
        </select>
        <label value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}>
          Ingredient:
        </label>
        <input type="text" value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}/>
        <select value={this.state.recipe_book.measure} onChange={this.handleMeasureChanged.bind(this)}>
          <option value="1/4c">
            1/4c
          </option>
          <option value="1/2c">
            1/2c
          </option>
          <option value="3/4c">
            3/4c
          </option>
          <option value="1c">
            1c
          </option>
          <option value="1 1/4c">
            1 1/4c
          </option>
        </select>
        <label value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}>
          Ingredient:
        </label>
        <input type="text" value={this.state.recipe_book.ingredients} onChange={this.handleIngredientsChanged.bind(this)}/>
        <select value={this.state.recipe_book.measure} onChange={this.handleMeasureChanged.bind(this)}>
          <option value="1/4c">
            1/4c
          </option>
          <option value="1/2c">
            1/2c
          </option>
          <option value="3/4c">
            3/4c
          </option>
          <option value="1c">
            1c
          </option>
          <option value="1 1/4c">
            1 1/4c
          </option>
        </select>

        <br/>
        
        <hr/>
        <button onClick={this.handleButtonClicked.bind(this)}>
          Save Record
        </button>
        <div value={this.props.recipe_book}></div>
        
      </div>
    );
  }
}

export default Dashboard