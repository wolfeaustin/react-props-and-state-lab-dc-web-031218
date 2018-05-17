import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        <ul>{this.props.pets.map(item => <Pet age={item.age} gender={item.gender}
          key={item.id} name={item.name} type={item.type} weight={item.weight}/>)}</ul>
      </div>
    );
  }
}

export default PetBrowser;
