import React, {Component} from 'react'
import classes from './newCalendar.module.scss'

export default class NewCalendar extends Component {
  state = {
    layout: [
      {i: 'a', id: 0, x: 0, y1: 0, y2: 2, h: 2},
      {i: 'b', id: 1, x: 2, y1: 3, y2: 5, h: 2},
      {i: 'c', id: 2, x: 4, y1: 5, y2: 15, h: 2}
    ],
    mousedown: false,
    pageY1: null,
    pageY2: null,
  }

  setMouseDown = (item) => {
    this.setState({mousedown: true})
  }
  
  mouseUp = () =>{
    this.setState({mousedown: false}) 
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

  getDayBox(layoutItem, index){
    let blockPositionY = layoutItem.y * 45 + 'px';
    let blockGridRow = layoutItem.y1 + '/' + layoutItem.y2;
    return(
      <div 
        key={layoutItem.id}
        className={classes.day_box} 
        style={{left: 0, top: 0, gridRow: blockGridRow}}
      >
        {layoutItem.i}
        <div className={classes.grap}
          onClick={(e) => this.setPageY(e)}
        >

        </div>
      </div>
    )
  }

  setPageY1 = e =>{
    this.setState({pageY1: e.pageY})
  }


  stretchOut = e =>{
    // let pageY2 = 
    this.setState({pageY2: e.pageY})
    
  }
  
  
  
  render(){

    return(
      <div className={classes.container}>
        <div className={classes.content} onMouseMove = {(e) => this.stretchOut(e) }>
          {
            this.state.layout.map((layoutItem, index) => {
              return this.getDayBox(layoutItem, index)
            })
          }
        </div>
      </div>
    )
  }
  
  
  
}