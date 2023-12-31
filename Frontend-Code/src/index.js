import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { SnackbarProvider } from 'notistack'

ReactDOM.render(
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    maxSnack={3}>
    <Provider store={store}>
      <App />
    </Provider>
  </SnackbarProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
