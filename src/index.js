/**
 * Created by liangyujie on 2016/12/19.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'
import App from './containers/App'
import userApp from './reducers'

let store = createStore(userApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

