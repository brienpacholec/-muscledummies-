import "./src/styles/app.scss"

import ReactDOM from "react-dom"

export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
