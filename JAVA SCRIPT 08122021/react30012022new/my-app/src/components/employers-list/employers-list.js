import EmployersListItem from '../employers-list-item/employers-list-item';

import './employers-list.css';

const EmployersList = ({list}) => {

    const elements = list.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/>
        );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;