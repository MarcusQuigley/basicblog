import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = ()=>{
    return (
        <div className="ui container comments"  >
            <ApprovalCard>
                <CommentDetail name="Marcus" date = "7:00pm" comment="First Commment!" avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="Jenn" date = "7:04pm" comment="Like, totally awesome!" avatar = {faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail name="Joe" date = "8:04pm" comment="Twats" avatar = {faker.image.avatar()}/>     
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));