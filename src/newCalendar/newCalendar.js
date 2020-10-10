import React, {Component} from 'react'
import classes from './newCalendar.module.scss'

export default class NewCalendar extends Component {
  state = {
    layout: [
      {i: 'a', id: 0, x: 0, y1: 1, y2: 4, h: 2},
      // {i: 'b', id: 1, x: 0, y1: 5, y2: 7, h: 2},
      // {i: 'c', id: 2, x: 0, y1: 7, y2: 10, h: 2}
    ],
    mousedown: false,
    pageY1: null,
    pageY2: null,
    resizingBlock: 0,
  }

  setMouseDown = index => {
    this.setState({
      mousedown: true,
      resizingBlock: index,
    })
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
    let blockGridRow = layoutItem.y1 + '/' + layoutItem.y2;
    console.log(blockGridRow);
    return(
      <div 
        key={layoutItem.id}
        className={classes.day_box} 
        style={{left: 0, top: 0, gridRow: blockGridRow}}
      >
        {layoutItem.i}
        <div className={classes.grap}
          onClick={(e) => this.setPageY1(e)}
          onMouseDown={() => this.setMouseDown(index)}
          onMouseUp={this.mouseUp}
        >

        </div>
      </div>
    )
  }

  setPageY1 = e =>{
    this.setState({pageY1: e.pageY});
  }
  
  setHeight = value =>{
    let layout = this.state.layout;
    layout[this.state.resizingBlock].y2 = Math.ceil(this.state.pageY2/1) - 2;
    this.setState({layout})
  }

  moveMouse = e =>{
    let pageY2 = e.pageY - this.state.pageY1;
    if(this.state.mousedown === false){
      console.log(pageY2);
      return false;
    }
    this.setState({pageY2});
    this.setHeight(this.state.pageY2)
  }
  
  
  
  render(){
    return(
      <div className={classes.container}>
        <div 
          className={classes.content} 
          onMouseMove={(e) => this.moveMouse(e)}
          >
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