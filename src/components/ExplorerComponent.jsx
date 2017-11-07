import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ExplorerComponent extends Component {
  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.updateBodyValue = this.updateBodyValue.bind(this);

    this.state = {};
    props.body.forEach(param => { this.state[param.name] = ''; });
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { url, method, headers } = this.props;
    this.props.onRequestSubmit({
      url,
      method,
      headers,
      body: this.state,
    });
  }

  updateBodyValue(e, name) {
    this.setState({
      [name]: e.target.value,
    });
  }

  render() {
    const {
      title, url, method, headers, body,
    } = this.props;

    const headerDivs = Object.keys(headers).map(key => (
      <div
        key={key}
        className="header"
      >
        {key}: {headers[key]}
      </div>
    ));
    const bodyDivs = body && body.map(param => (
      <div key={param.name}>
        <h4 className="paramHeader">{param.name.replace('-', ' ')}</h4>
        <input
          className="form-control paramInput"
          onChange={e => this.updateBodyValue(e, param.name)}
          value={this.state[param.name]}
          {...param}
        />
      </div>
    ));

    return (
      <div className="explorer">
        <h1>{title}</h1>
        <h3 className="method">{method}</h3>

        <h2>Headers</h2>
        {headerDivs}

        <h2>Base URL</h2>
        <div>{url}</div>

        <h2>Body</h2>
        <form
          className="form-inline"
          onSubmit={this.onFormSubmit}
        >
          <div className="form-group">
            {bodyDivs}
            <button className="btn sendButton" type="submit" value="Send Request">
              Send Request
            </button>
          </div>
        </form>

        <h2>Response</h2>
        <textarea className="form-control" value={this.props.response} />
      </div>
    );
  }
}

ExplorerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  headers: PropTypes.objectOf(PropTypes.string).isRequired,
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  response: PropTypes.string.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
};

export default ExplorerComponent;
