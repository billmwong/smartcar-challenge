import $ from 'jquery';

const receiveResponse = data => ({
  type: 'RECEIVE_RESPONSE',
  data,
});

export const sendRequest = data => (
  dispatch => {
    $.ajax({
      method: data.method,
      url: data.url,
      headers: data.headers,
      data: data.body,
    })
      .done(response => {
        dispatch(receiveResponse(JSON.stringify(response)));
      })
      .fail((err, status) => console.error(err, status));
  }
);
