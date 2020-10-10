import React, {Component} from 'react'
import classes from './WeeklyCalendar.module.scss'

export default class WeeklyCalendar extends Component {

    state = {
        week: this.getWeekState(),
        mousedown: {index: null, state: false},
        mouseup: true,
        pageY: null,
    }

    getWeekState(){
        let date = new Date(0, 0, 0, 0, 0, 0, 0);
        let week = [];
        for (let i = 0; i < 7; i++) {
            for(let a=0; a<96; a++){
                let item = {id: a, dayOfWeek: i, select: false, time: null, addCell: false};
                date.setMinutes(date.getMinutes() + 15);
                let h = date.getHours();
                let m = date.getMinutes();
                let time = h * 60 + m;
                item.time = `${Math.trunc(time / 60)}:${time % 60}`;
                week.push(item);
            }
        }
        return week;
    }
    setMouseDown = (item) => {
        this.setState({mousedown: {index: item.dayOfWeek, state: true}})
    }
    mouseUp = () =>{
        this.setState({mousedown: {index: null, state: false}}) 
    }
    setMouseOver = (item, index) =>{
        if(item.dayOfWeek !== this.state.mousedown.index){
            return false;
        }
        if(this.state.mousedown.state === false){
            return false
        }
        let week = this.state.week;
        week[index].select = true;
        this.setState({week})
    }
    addCell = index =>{
        let week = this.state.week;
        week[index].addCell = true;
        this.setState({week})
    }
    getTableDay(item, index){
        let cls = [classes.column_item]
        if(item.select === true){
            cls.push(classes.active)
        }
        let addCls = [];
        if(item.addCell === true){
            addCls.push(classes.addCell)
        }
        return (
            <div 
                // id={item.id} 
                key={item.id + '-' + item.dayOfWeek}
                onMouseDown={ () => this.setMouseDown(item)} 
                onMouseUp={this.mouseUp}
                onMouseOver={ () => this.setMouseOver(item, index)}
                className={cls.join(' ')}
                onClick={() => this.addCell(index)}
                >
                    <div id={item.id + '-' + item.dayOfWeek} className={addCls.join(' ')}>
                        <div onClick={ (e) => this.setPageY(e) } onMouseDown={() => this.stretchOut(item)} className={classes.addCellGrab} ></div>
                    </div>
            </div>
        )
    }

    stretchOut = (item) => {
        let id = item.id + '-' + item.dayOfWeek;
        let block = document.getElementById(id);
        let height = block.offsetHeight;
        block.style.height = '40px';
    }

    setPageY = (event) =>{
        this.setState({pageY: event.pageY});
    }


    getWeek = () => {
        return (
            this.state.week.map((item, index) => {
                return this.getTableDay(item, index) 
            })
        )
    }

    render() {
        return (
            <div className={classes.week_container} style={{marginTop: '50px'}}>
                {this.getWeek()}
            </div>
        )
    }
}
