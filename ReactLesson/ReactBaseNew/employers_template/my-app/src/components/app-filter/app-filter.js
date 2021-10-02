import './app-filter.css'


const AppFilter = () => {
    return (
        <div className="btn-group">
        <button
            className="bnt btn-light"
            type="button">Все сотрудники
        </button>
        <button
        className="bnt btn-outline-light"
        type="button">На повышении
        </button>
        <button
           className="bnt btn-outline-light"
           type="button">З/п больше 1000$
        </button>
        </div>
    )
}

export default AppFilter;