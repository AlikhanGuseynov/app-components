import React, {Component} from 'react'
import classes from './Reviews.module.scss'
import profilePhoto from '../assets/photo.png'
import star from '../assets/star.png'

export default function Reviews(props) {

    function getReviews(reviews) {
        return (
            reviews.map((item, index) => {
                return (
                    <div key={item.id}>
                        <p className={classes.review_text}>{item.text}</p>
                        <img src={star}/>
                    </div>
                )
            })
        )
    }

    function getReview(item, index) {
        return (
            <div key={item.id} className={classes.review}>
                <img src={profilePhoto}/>
                <div className={classes.review_content} style={{width: '100%'}}>
                    <div className={classes.content_header}>
                        <div className={classes.content_header_left + ' d_flex'}>
                            <img src={star}/>
                            <p className={classes.name + ' text_10 black_main'}>{item.name}</p>
                            <p className={classes.status + ' text_10'}>Верифицированный пациент</p>
                        </div>
                        <div className={classes.content_header_right + ' d_flex'}>
                            {getReviews(item.reviews)}
                        </div>
                    </div>
                    <p id='user_text' className={classes.user_text + ' text_10'}>
                        {item.text}
                    </p>
                    <div className={classes.content_footer}>
                        <button className={classes.reply_btn + ' text_9 blue_main'}>Ответить</button>
                        <p className={classes.date + ' text_9'}>Авг 29, 2019</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            {
                props.users.map((item, index) => {
                    return getReview(item, index)
                })
            }
        </div>
    )


};
