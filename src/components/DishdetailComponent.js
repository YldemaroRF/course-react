import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,CardImgOverlay, timeoutsShape } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish
        }
    }
    renderComments(){
        if (this.props.dish != null){
            console.log(this.props.dish.comments)
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }

    }

    render() {
        function RenderDish({dish}) {
            if (dish != null){
                return(
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        }

        function RenderComments({comments}) {
            if (comments != null){
                const _comments = comments.map((comment) => {
                    return (
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    );
                });
    
                return (
                    <div>
                        <h4>Comments</h4>
                        {_comments}
                    </div>
                );
            }
            else{
                return(
                    <div></div>
                );
            }
        }

        const  DishDetail = (props) => {
           return <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={this.props.dish?.comments}/>
                    </div>
                </div>
            </div>
        }

        return (
            <DishDetail/>
        );
    }
}

export default DishdetailComponent;