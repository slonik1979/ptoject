/* eslint-disable no-unused-vars */
import './app-info.css';


const AppInfo = ({employees, increased, likes}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h2>Премию получат: {increased}</h2>
            <h2>Звезду имеют: {likes}</h2>
        </div>
    )
}

export default AppInfo;