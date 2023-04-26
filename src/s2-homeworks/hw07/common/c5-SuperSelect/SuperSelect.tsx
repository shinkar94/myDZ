import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent, useState,
} from 'react'
import s from './SuperSelect.module.css'
import {ThemesType} from "../../../hw12/HW12";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: ThemesType[]
    onChangeOption?: (option: number) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {


    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key
    // const [selectedFruit, setSelectedFruit] = useState('111');
    // console.log(selectedFruit)

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
        // onChangeOption && onChangeOption(
        //     options && options.filter(el => el.value === e.currentTarget.value)[0].id
        // )
        // setSelectedFruit(e.currentTarget.value)
        onChangeOption && onChangeOption(+e.currentTarget.value)
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
