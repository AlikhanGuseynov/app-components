import React, {Component} from 'react'
import classes from './WeeklyCalendar.module.scss'

export default class WeeklyCalendar extends Component {

    getDayTime() {
        let date = new Date(0, 0, 0, 0, 0, 0, 0);
        let day = [{id: 0, time: 0 + ':' + 0, select: true}];
        for (let i = 1; i < 24 * 4; i++) {
            let item = {id: null, time: null, select: false};
            date.setMinutes(date.getMinutes() + 15);
            let h = date.getHours();
            let m = date.getMinutes();
            let time = h * 60 + m;
            item.id = i;
            item.time = `${Math.trunc(time / 60)}:${time % 60}`;
            day.push(item)
        }
        ;
        return day;
    }


    getTimeColumn(weekItem) {
        return (
            <div key={weekItem.day} className={classes.time_column}>
                {
                    this.getDayTime().map((item, index) => {
                        return (
                            <div key={item.id} className={classes.time_column_item}>
                                <span draggable="true" className={classes.time_item + ' '}>
                                 {item.time}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    mouseDown(item) {
        console.log(item)
    }

    getTableCellClass(item) {
        let cls = [classes.column_item]
        if (item.select === true) {
            cls.push(classes.active)
        }
        return cls.join(' ');
    }

    getTable(weekItem) {
        return (
            <div key={weekItem.day} className={classes.day_column}>
                {
                    this.getDayTime().map((item, index) => {
                        return (
                            <div id={item.id} onMouseDown={() => this.mouseDown(item)} key={item.id}
                                 className={this.getTableCellClass(item)}>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    getWeek() {
        let week = [];
        for (let i = 0; i < 8; i++) {
            let item = {id: null, day: null};
            item.id = i;
            item.day = i + 1;
            week.push(item);
        }
        return (
            week.map((weekItem, index) => {
                return (
                    <div key={weekItem.id}>
                        {weekItem.id === 0 ? this.getTimeColumn(weekItem) : this.getTable(weekItem)}
                    </div>
                )
            })
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }


    render() {
        return (
            <div className={classes.week_container} style={{marginTop: '50px'}}>
                {this.getWeek()}
            </div>
        )
    }
}
