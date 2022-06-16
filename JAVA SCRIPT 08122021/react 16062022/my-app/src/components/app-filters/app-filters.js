import './app-filters.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                className="bnt btn-light">
                
                    Все сотрудники
            </button>

            <button  type="button"
                className="btn btn-outline-light">
                            
                    На повышение
            </button>

            <button type="button"
                className="btn btn-outline-light">
                
                    Зарплата больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;