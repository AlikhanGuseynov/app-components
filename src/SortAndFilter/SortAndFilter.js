import React, {Component} from 'react'
import classes from './SortAndFilter.module.scss'
import SortList from './SortList/SortList'

export default class SortAndFilter extends Component {

    state = {
        sortState: false,
        filterState: false,
    }

    getSortList() {
        return this.state.sortState
            ? <SortList />
            : null
    }

    getFilterList() {
        return this.state.filterState
            ? <div>getSortList</div>
            : null
    }

    sortStateToggle = () =>{
        this.setState({sortState: !this.state.sortState })
    }
    sortFilterToggle = () =>{
        this.setState({filterState: !this.state.filterState })
    }

    render() {
        let sortCls = [classes.item]
        if (this.state.sortState) {
            sortCls.push(classes.active)
        }
        let filterCls = [classes.item, classes.item_filter]
        if (this.state.filterState) {
            filterCls.push(classes.active)
        }
        return (
            <div className={classes.container}>
                <div className={classes.container_left_side}>
                    <div>
                        <button onClick={this.sortStateToggle}
                             className={sortCls.join(' ')}>
                            <p>Сортировка</p>
                        </button>
                        {this.getSortList()}
                    </div>
                    <div onClick={this.sortFilterToggle}
                         className={filterCls.join(' ')}>
                        <p>Фильтры</p>
                        {this.getFilterList()}
                    </div>
                </div>
                <div className={classes.search_container}>
                    <img src="../assets/search.svg" alt=""/>
                    <input className={classes.search_input} type="text" placeholder={'введите имя пациета'}/>
                </div>
            </div>
        )
    }
};
