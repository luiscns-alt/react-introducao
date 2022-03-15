import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'Javascript',
          image:
            'https://pbs.twimg.com/card_img/1501118865707012096/SvDbtNrl?format=png&name=medium',
        },
        {
          id: 2,
          name: 'Angular',
          category: 'Javascript',
          image:
            'https://static.imasters.com.br/wp-content/uploads/2021/05/07095345/angular.png',
        },
      ],
    };
    this.remove = this.remove.bind(this);
  }

  remove(courseId) {
    const { courses } = this.state,
      courseIndex = courses.findIndex((course) => course.id === courseId);

    courses.splice(courseIndex, 1);
    this.setState({ courses });
  }

  render() {
    const { state } = this;
    return (
      <div className='App'>
        <ul className='courses-list'>
          {state.courses.map((course) => (
            <Course course={course} onRemove={this.remove} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
