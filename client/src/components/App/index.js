import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from 'src/components/Landing';
import { withRouter } from 'react-router';
import segment from 'segment';

@withRouter
class App extends Component {
  componentDidMount() {
    const {location} = this.props;
    segment.page(location.pathname, location.search);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname || this.props.location.search !== nextProps.location.search) {
        segment.page(nextProps.location.pathname, nextProps.location.search)
    }
  }
  render() {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={Landing}/>
        </Switch>
      </div>
    );
  }
}

export default App;
