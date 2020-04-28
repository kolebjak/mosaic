import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import getStore from './getStore';
import getSaga from './getSaga';

import App from './modules/app/App';
import { appMountedAction } from './modules/app/actions';

import 'antd/dist/antd.css';
import './index.css';

const history = createHistory({ basename: '/mosaic/'});
const store = getStore(history);

store.runSaga(getSaga());

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
  document.getElementById('root') as HTMLElement,
  () => {
      // @ts-ignore
      store.dispatch(appMountedAction());
  }
);
