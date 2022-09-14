import React from "react";
import { FormattedMessage } from "react-intl";

import { useCssBreakpoints } from "react-use-css-breakpoints";
import { createAndRedirectToNewHub } from "../../../../../utils/phoenix-utils";
import "./CreateSpaceButton.scss";

export function CreateSpaceButton() {
  return (
    <button
      className="button-1"
      onClick={e => {
        e.preventDefault();
        createAndRedirectToNewHub(null, null, false);
      }}
    >
      <FormattedMessage id="create-room-button" defaultMessage="Create Space" />
    </button>
  );
}
