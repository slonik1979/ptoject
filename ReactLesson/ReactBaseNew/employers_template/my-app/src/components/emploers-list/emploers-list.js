
import EmploersListItem from "../emploers-list-item/emploers-list-item";

import './emploers-list.css';

const EmploersList = () => {
    return (
        <ul className="app-list list-group">
            <EmploersListItem name="John C." salary={800}/>
            <EmploersListItem name="Alex D." salary={3000}/>
            <EmploersListItem name="Mike F." salary={5000}/>
        </ul>
    )
}

export default EmploersList;