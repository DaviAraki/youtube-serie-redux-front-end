import React, { Fragment } from "react";

import { useSelector } from "react-redux";

export default function Message() {
  const isShown = useSelector((state) => state.layout.showMessage);

  return (
    <Fragment>
      {isShown && (
        <div className="container mt-3">
          <div className="alert alert-success" role="alert">
            Cadastrado com sucesso!
          </div>
        </div>
      )}
    </Fragment>
  );
}
