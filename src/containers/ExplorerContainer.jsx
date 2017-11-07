import { connect } from 'react-redux';

import { sendRequest } from '../actions';
import ExplorerComponent from '../components/ExplorerComponent';

const mapStateToProps = state => ({
  response: state.response,
});

const mapDispatchToProps = dispatch => ({
  onRequestSubmit: data => {
    dispatch(sendRequest(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplorerComponent);
