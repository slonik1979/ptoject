//import { Component } from 'react';
import './employees-list-item.css'

const EmployeesListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         like: false
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }

    // onIncrease = () => {
    //     this.setState(state => ({
    //         increase: !state.increase
    //       }))
    //   }

    //   onLike = () => {
    //     this.setState(({like}) => ({
    //         like: !like
    //       }))
    //   }

    const {name, salary, onDelete, onToggleProp, increase, like} = props;
        
        let newIncrease = 'list-group-item';
        // let newLike = 'list-group-item';
     if (increase) {
        newIncrease += ' increase';
    }
    if (like) {
        newIncrease += ' like';
    }
    
    return (
        <li className={newIncrease + ' d-flex justify-content-between'}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle='like'>{name} </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + ' $'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp} data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm " onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

    
}

export default EmployeesListItem;