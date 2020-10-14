import React, {Component} from 'react'
import classes from './SortList.module.scss'

export default function SortList(props) {

    return (
        <div className={classes.list}>
            <input className={classes.radio} name='sort' id='usefulness' type="radio"/>
            <label className={classes.label + ' text_3'} htmlFor="usefulness">
                по полезности
            </label>

            <input className={classes.radio} name='sort' id='rating' type="radio"/>
            <label className={classes.label + ' text_3'} htmlFor="rating">
                по рейтингу
            </label>

            <input className={classes.radio} name='sort' id='date' type="radio"/>
            <label className={classes.label + ' text_3'} htmlFor="date">
                по дате
            </label>
        </div>
    )

};
