import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle,CardImgOverlay } from 'reactstrap';

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: this.props.dish
        }
    }

    renderDish() {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishdetailComponent;