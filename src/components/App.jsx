import React from 'react';

import ExplorerContainer from '../containers/ExplorerContainer';

const options = {
  title: 'Add new user',
  url: 'https://jsonplaceholder.typicode.com/posts/',
  method: 'POST',
  headers: {
    Authorization: 'Bearer eawke!ddxaweaarglebargleaw,1',
    'Content-Type': 'application/json',
  },
  body: [
    {
      name: 'email',
      type: 'email',
      max: 24,
      min: 3,
    },
    {
      name: 'full-name',
      type: 'text',
      placeholder: 'John Doe',
      required: true,
    },
    {
      name: 'phone',
      type: 'tel',
      pattern: '\\d\\d\\d-\\d\\d\\d\\d',
    },
  ],
};

const options2 = { // eslint-disable-line no-unused-vars
  title: 'Get users',
  url: 'https://jsonplaceholder.typicode.com/',
  method: 'GET',
  headers: {
    Charset: 'UTF-8',
  },
};

const App = () => (
  <div>
    <ExplorerContainer
      title={options.title}
      url={options.url}
      method={options.method}
      headers={options.headers}
      contentType={options.headers['Content-Type']}
      body={options.body}
    />
  </div>
);

export default App;
