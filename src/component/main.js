import s from "./main.module.css"
const Main = () => {
    return (
        <div className={s.body}>
            <div className={s.container}>
                <div data-text="CHARACKET" className={s.beforeText}>
                    <div className={s.text}>character</div>
                </div>
                <div data-text="SKILLS" className={s.beforeText}>
                    <div className={s.text}>SKILLS </div>
                </div>
                <div data-text="ANOUTHER" className={s.beforeText}>
                    <div className={s.text}>anouther</div>
                </div>
            </div>
        </div>
    )
}
export default Main;