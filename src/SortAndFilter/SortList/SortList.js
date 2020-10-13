import React, {Component} from 'react'
import classes from './SortList.module.scss'

export default function SortList(props) {

    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <input className={classes.radio} name='sort' id='usefulness' type="radio"/>
                <label className={classes.label} htmlFor="usefulness">
                    по полезности
                </label>
            </li>
            <li className={classes.item}>
                <input className={classes.radio} name='sort' id='rating' type="radio"/>
                <label className={classes.label} htmlFor="rating">
                    по рейтингу
                </label>
            </li>
            <li className={classes.item}>
                <input className={classes.radio} name='sort' id='date' type="radio"/>
                <label className={classes.label} htmlFor="date">
                    по дате
                </label>
            </li>
        </ul>
    )

};
