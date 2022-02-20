import { StrictMode } from "react";
import ReactDOM from "react-dom";

function Hello() {
  return (
    <div>
      <div data-ns-test="project-name">Stock listing Website</div>
      <div data-ns-test="project-description">
        Website to see live stocks and Cryptocurrency price changing!
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Hello />
  </StrictMode>,
  rootElement
);
