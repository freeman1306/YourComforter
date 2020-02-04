import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./BasicPageLayout.module.scss";

const BasicPageLayout = ({ title, children, description, className }) => {
  return (
    <div className={classNames("mainWrapper", "main", styles.wrapper, className.container)}>
      <div className={classNames(styles.titleWrap, className.title)}>
        <h2>{title}</h2>
        <div className={classNames(styles.description, "smallText", className.description)}>{description}</div>
      </div>
      <div className={classNames(styles.content, className.content)}>{children}</div>
    </div>
  );
};

BasicPageLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.shape({
    container: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  })
};

BasicPageLayout.defaultProps = {
  title: "",
  description: "",
  className: {
    container: "",
    content: "",
    title: "",
    description: ""
  }
};

export default BasicPageLayout;
