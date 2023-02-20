import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" class="btn btn-light mr-2">Все сотрудники</button>
            <button type="button" class="btn btn-outline-light">На повышении</button>
            <button type="button" class="btn btn-outline-light">З/п больше 1000$</button>
        </div>
    )
}

export default AppFilter;