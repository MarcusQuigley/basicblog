import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
const App = ()=>{
    return (
        <div className="ui container comments">
           <CommentDetail name={faker.name.firstName()} date = "7:00pm" comment="First Commment!" avatar = {faker.image.avatar()}/>
           <CommentDetail name="Jenn" date = "7:04pm" comment="Like, totally awesome!" avatar = {faker.image.avatar()}/>
           <CommentDetail name="Joe" date = "8:04pm" comment="Twats" avatar = {faker.image.avatar()}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));