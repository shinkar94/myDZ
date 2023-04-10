import s from './Loader.module.css'

export const Loader = () => {
    return(
        <div className={s.container_Preloader}>
            <div className={s.preloader}>
                <p className={s.text}>Загрузка...</p>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
