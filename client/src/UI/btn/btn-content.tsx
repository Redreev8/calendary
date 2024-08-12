import style from './btn.module.scss'
import { FC } from 'react'
import Svg from '../svg'
import { BtnProps } from './btn'


const Content: FC<Omit<BtnProps, 'ref' | 'href'>> = ({ children, icon }) => (
    <>
        {
            children && (
                <span className={ style['btn__text'] }>
                    { children }
                </span>
            ) 
        }
        {
            icon && (
                <Svg
                    className={ style['btn__icon'] }
                    name={ icon }
                />
            ) 
        }
    </>
)

export default Content