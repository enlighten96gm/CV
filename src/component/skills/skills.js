import s from "./skills.module.css"
const Skills = () => {
    return (
        <div className={s.smt}>
            <div className={s.main}>
                <div className={s.java}>
                    <div className={s.sqare1}></div>
                    <div className={s.sqare2}></div>
                </div>
                <div className={s.react}>
                    <div className={s.circle1}></div>
                    <div className={s.circle2}></div>
                </div>
                <div className={s.typescript}></div>
                
            </div>
        </div>
    )
}

export default Skills