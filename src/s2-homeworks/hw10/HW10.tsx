import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import store, {AppStoreType} from './bll/store'
import {loadingAC} from './bll/loadingReducer'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s2 from '../../s1-main/App.module.css'
import {Loader} from './Loader'
import {log} from "util";

/*
* 1 - в файле loadingReducer.ts дописать типы и логику
* 2 - получить isLoading из редакса
* 3 - дописать функцию setLoading
* 4 - сделать стили в соответствии с дизайном
* */

const HW10 = () => {
    // тут useSelector и useDispatch
    const isLoading = useSelector<AppStoreType>((store)=> store.loading.isLoading)
    const dispatch = useDispatch();

    const setLoading = () => { // показать крутилку на 1,5 секунд
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false));
        }, 1500);
    }
    {console.log(isLoading)}
    return (
        <div id={'hw10'}>
            <div className={s2.hwTitle}>Homework #10</div>
            <div className={s2.hw}>
                {isLoading ? (
                    <div id={'hw10-loading'}>
                        <Loader/>
                    </div>
                ) : (
                    <SuperButton
                        id={'hw10-button-start-loading'}
                        onClick={setLoading}
                    >
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    )
}

export default HW10
