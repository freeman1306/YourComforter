import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./OrderPageLayout.module.scss";

import { getStatus } from "../../helpers/ordersData";

const OrderPageLayout = ({ title, children, status }) => {
  const { color, name } = getStatus(status);

  return (
    <div className={classNames("mainWrapper", "main", styles.wrapper)}>
      <div className={styles.titleWrap}>
        <h2>{title}</h2>
        <p className={classNames(styles.description, "smallText")}>
          <span style={{ color }}>• </span>
          {name}
        </p>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

OrderPageLayout.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  children: PropTypes.node.isRequired
};

OrderPageLayout.defaultProps = {
  title: "",
  status: "Requested"
};

export default OrderPageLayout;
