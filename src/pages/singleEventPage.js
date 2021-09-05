import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Slideshow } from '../components/landingPage/slideImages';
import { httpRequest } from '../helpers/httpRequest';
import { errorToast } from '../helpers/toastMessages';
import PageWrapper from '../components/Layout/UnAuthorizedLayout';
import { CommentBox } from '../components/common/comment';

class singleEventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                ...props.location.state.event
            },
            events: [

            ]
        }

    }


    async componentWillMount() {
        const { error, response } = await httpRequest("GET", `/events/find/${this.props.location.state.event.id}`);
        if (error) {
            errorToast(error.message);
        }
        else {
            this.setState({ event: response.data.event })
        }
        const res = await httpRequest("GET", "/events?page=1&limit=10&status=Pending");
        this.setState({ events: [...res.response.data.data.result] })
        console.log(this.state.events)
    }

    render() {
        return (
            <PageWrapper className="mainfont">
                <Slideshow isEvent event={this.state.event} image={this.state.event.image} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-col p-3 m-3 justify-between">
                    <div>
                        <h3>Description</h3>
                        <div className="bg-gray-100 justify-between rounded flex flex-col my-3 p-5 text-base">
                            <div className="flex flex-col wrap items-left pb-4 py-12 text-sm">
                                <p>{this.state.event.description}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <h3>Recent Events</h3>
                        <div>
                            {
                                this.state.events.map((e, index) => {
                                    return <div key={e.id} className="bg-gray-100  rounded text-left flex flex-row p-3 my-3 text-base">
                                        <div><img className="w-7 h-7" src={e.image[0]} /></div>
                                        <div className="pl-3">{e.title}</div>
                                    </div>
                                }
                                )
                            }
                        </div>
                    </div>
                </div>
                <CommentBox eventId={this.state.event.id}/>
                <div className="p-3 m-3">
                    <h2 className="p-3">Treading Events</h2>
                    <div className="my-drid gap-6 text-sm md:text-base hover15 column py-3 m-3 ">
                        {
                            this.state.events.map((e, index) => {
                                return <div key={e.id} className="mb-4">
                                    <figure><img src={e.image[0]} /></figure>
                                    <span style={{fontSize:"12px"}}>
                                        {e.title}
                                    </span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

singleEventPage.propTypes = {

};

export default singleEventPage;