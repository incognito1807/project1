/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import React, { Component } from 'react';
import ListItem from './components/ListItem';
import checkall from './img/checkall.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      listItems: [
        { title: 'Công việc 1', isComplete: true},
        { title: 'Công việc 2' },
        { title: 'Công việc 3' },
      ]
    }
    this.addWork = this.addWork.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { listItems } = this.state;
      const key = listItems.indexOf(item);
      this.setState({
        listItems: [
            ...listItems.slice(0, key),
            {
              ...item,
              isComplete: !isComplete
            },
            ...listItems.slice(key+1)
          ]
      })
    };
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  addWork(event) {
    if(event.keyCode === 13) {   //nhan enter thi xu ly
      let text = event.target.value;
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }

      this.setState({
        newItem: '',
        listItems: [
          { title: text, isComplete: false },
          ...this.state.listItems
        ]
      })
    }
  }

  render() {
    const { listItems, newItem } = this.state;
    if(listItems.length) {
      return (
        <div className = "main">
          <div className="App">
            <div className="Header">
              <img src = {checkall} />
              <input 
                type = "text" 
                placeholder = "Thêm công việc"
                value = {newItem}
                onChange = {this.onChange}
                onKeyUp = {this.addWork} />
            </div>
            {listItems.length && listItems.map((item, key) => 
                <ListItem 
                  key={key} 
                  item={item} 
                  onClick = {this.onItemClick(item)} />
              )
            }
          </div>
        </div>
      );
    } else {
      <div className="App">
        {listItems.length && 'everything done'}
      </div>
    }
  }
}

export default App;
