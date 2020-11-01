/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './ListItem.css';
import classNames from 'classnames';
import checked from '../img/checked.svg';
import unchecked from '../img/unchecked.svg';

class ListItem extends Component {
    constructor(props) {
        super(props);

        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick() {
        this.props.item.isComplete = !this.props.item.isComplete;
    }
    render() {
        const { item, onClick} = this.props;
        let url = unchecked;
        if(item.isComplete){
            url = checked;
        }

        return (
            <div className={classNames('ListItem', {
                'ListItem-complete': item.isComplete
            })}>
                <img onClick={onClick} src = {url} />
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default ListItem;