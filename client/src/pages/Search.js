import React, { Component } from "react";
import Section from "../components/Section";
import Form from "../components/Form";
import Card from "../components/Card";
import API from "../utils/API";

class Search extends Component {
    state = {
        bookSearch: "",
        result: []
    };

    handleInputChange = e => {
        e.preventDefault();
        const value = e.target.value;
        console.log(e.target.value);
        this.setState({
            bookSearch: value
        });
    }

    handleOnClickButton = e => {
        e.preventDefault();

        console.log(this.state.bookSearch);

        // API.getBooks()
        // .then(res=> console.log(res.data))
        // .catch(err => console.log(err));
        API.getSearchResult(this.state.bookSearch)
            .then(res => {
                console.log(res.data);
                this.setState({ result: res.data });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="uk-container-large">
                <Section>
                    <h3 className="uk-text-center">(React) Google Books Search</h3>
                    <h5 className="uk-text-center">Search for and Save Books of Interest</h5>
                </Section>

                <Section>
                    <Form>
                        <legend className="uk-legend">Book Search</legend>

                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="form-stacked-text">Book</label>
                            <div className="uk-form-controls">
                                <input
                                    className="uk-input"
                                    id="form-stacked-text"
                                    type="text"
                                    placeholder="Book name or author..."
                                    // value={this.state.bookSearch}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-default uk-float-right" onClick={this.handleOnClickButton}>Submit</button>
                        </div>
                    </Form>
                </Section>

                {this.state.result.length > 0 &&
                    <Section>
                        <legend className="uk-legend">Result</legend>
                        {this.state.result.map(item => (
                            <Card
                                key={item.title}
                                title={item.title}
                                author={item.author}
                                image={item.image}
                                description={item.description}
                            ></Card>
                        ))}
                    </Section>
                }
            </div>
        );
    };
}

export default Search;