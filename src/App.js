import React from 'react';
import './App.css';
import WeeklyCalendar from './WeeklyCalendar/WeeklyCalendar'
import Reviews from './Reviews/Reviews'


function App() {

    const users = [
        {
            id: 0,
            name: 'Александр Шаповалов',
            status: 0,
            generalReview: 4.6,
            reviews: [
                {id: 0, text: 'Рекомендации', value: 4.3 },
                {id: 1, text: 'Время ожидания', value: 4},
                {id: 2, text: 'Панибратская манера', value: 3.7 },
            ],
            date: new Date(),
            text: 'Dr. Mourad was wonderful, he explained everything i wanted to know , he was knowledgable and was extremely helpful. Front desk ladies where also kind and wonderful. Front desk ladies where also kind and wonderful. Front desk ladies where also kind and wonderful.'
        }
    ]


    return (
        <div className="App">
            {/*<WeeklyCalendar />*/}
            <Reviews users={users} />
        </div>
    );
}

export default App;




