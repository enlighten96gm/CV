import { NavLink } from "react-router-dom"
import Charcter from "./character/character"
import s from "./main.module.css"


const Main = () => {
    return (
        <div className={s.body}>
            <div className={s.container}>
                <div data-text={"CHARACTER"} className={s.beforeText}>
                    <div className={s.text}>
                        <NavLink className={s.link} to='/character'>character</NavLink>
                    </div>
                </div>
                <div data-text="SKILLS" className={s.beforeText}>
                    <div className={s.text}>
                        <NavLink className={s.link} to='/skills'>skills</NavLink>
                    </div>
                </div>
                <div data-text="ANOTHER" className={s.beforeText}>
                    <div className={s.text}>another</div>
                </div>
            </div>
        </div>
    )
}
export default Main;