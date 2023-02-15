import { Link, Outlet } from "react-router-dom";

import "./Navigation.scss";

export default function Navigation({
  title,
  firstBtnTitle,
  secondBtnTitle,
  firstBtnLink,
  secondBtnLink,
  firstBtnFunc,
  secondBtnFunc,
  firstBtnType,
  secondBtnType,
  firstBtnForm,
  secondBtnForm,
}) {
  return (
    <header className="navigation">
      <h1>{title}</h1>

      <div className="btn-section">
        {/* <Link to={firstBtnLink}>
          <button onClick={firstBtnFunc} form={form} type={firstBtnType}>
            {firstBtnTitle}
          </button>
        </Link>

        <Link to={secondBtnLink}>
          <button
            id={title === "Product List" ? "delete-product-btn" : ""}
            onClick={secondBtnFunc}
            type={secondBtnType}
          >
            {secondBtnTitle}
          </button>
        </Link> */}

        {firstBtnFunc || firstBtnForm ? (
          <button
            onClick={firstBtnFunc}
            form={firstBtnForm}
            type={firstBtnType}
          >
            {firstBtnTitle}
          </button>
        ) : (
          <Link to={firstBtnLink}>
            <button>{firstBtnTitle}</button>
          </Link>
        )}

        {secondBtnFunc || secondBtnForm ? (
          <button
            id={title === "Product List" ? "delete-product-btn" : ""}
            onClick={secondBtnFunc}
            form={secondBtnForm}
            type={secondBtnType}
          >
            {secondBtnTitle}
          </button>
        ) : (
          <Link to={secondBtnLink}>
            <button id={title === "Product List" ? "delete-product-btn" : ""}>
              {secondBtnTitle}
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
