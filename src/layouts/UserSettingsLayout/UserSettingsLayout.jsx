import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import styles from "./UserSettingsLayout.module.scss";

import { UserContext } from "../../context/UserContext";
import { paths } from "../../routes";
import { SEEKER } from "../../helpers/userRoles";

import BasicPageLayout from "../BasicPageLayout/BasicPageLayout";
import NestedMenuList from "../../components/NestedMenuList/NestedMenuList";
import UserImageContainer from "../../containers/UserImageContainer";

const UserSettingsLayout = ({ title, description, children }) => {
  const { firstName, lastName, role } = useContext(UserContext);
  const isSeeker = role === SEEKER;

  return (
    <div className={classNames(styles.accountSettingsWrapper, "mainWrapper")}>
      <aside className={styles.sidebar}>
        <div className={styles.userEditableImageWrap}>
          <UserImageContainer height="80px" />
        </div>
        <p className={styles.userName}>
          {firstName} {lastName}
        </p>
        <span className={classNames(styles.photoHint, "noteText")}>(Click to change your photo)</span>

        <ul className={classNames(styles.sidebarNav)}>
          {isSeeker ? (
            <li className={classNames(styles.sidebarNavItem)}>
              <NavLink
                className={classNames(styles.sidebarNavLink)}
                activeClassName={styles.sidebarNavLinkActive}
                to={paths.profileSettings}
                exact
              >
                Account settings
              </NavLink>
            </li>
          ) : (
            <NestedMenuList
              title="Account settings"
              className={{
                component: styles.sidebarNavDropdown,
                title: styles.sidebarNavDropdownTitle,
                list: styles.sidebarNavDropdownList
              }}
            >
              <>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsPersonalData}
                  >
                    Personal data
                  </NavLink>
                </li>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsDriversData}
                  >
                    Drivers data
                  </NavLink>
                </li>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsPreferences}
                  >
                    Preferences
                  </NavLink>
                </li>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsCV}
                  >
                    CV settings
                  </NavLink>
                </li>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsWorkOptions}
                  >
                    Work options
                  </NavLink>
                </li>
                <li className={styles.sidebarNavItem}>
                  <NavLink
                    className={styles.sidebarNavLink}
                    activeClassName={styles.sidebarNavLinkActive}
                    to={paths.profileSettingsInterview}
                  >
                    Interview
                  </NavLink>
                </li>
              </>
            </NestedMenuList>
          )}
          {isSeeker && (
            <li className={classNames(styles.sidebarNavItem)}>
              <NavLink
                className={classNames(styles.sidebarNavLink)}
                activeClassName={styles.sidebarNavLinkActive}
                to={paths.profileSettingsResivers}
              >
                Trusted companion friends information
              </NavLink>
            </li>
          )}
          <li className={classNames(styles.sidebarNavItem)}>
            <NavLink
              className={classNames(styles.sidebarNavLink)}
              activeClassName={styles.sidebarNavLinkActive}
              to={paths.profileSettingsChangePassword}
            >
              Change password
            </NavLink>
          </li>
          <li className={classNames(styles.sidebarNavItem)}>
            <NavLink
              className={classNames(styles.sidebarNavLink)}
              activeClassName={styles.sidebarNavLinkActive}
              to={paths.profileSettingsChangePlan}
            >
              Current plan
            </NavLink>
          </li>
        </ul>
      </aside>

      <BasicPageLayout
        className={{
          container: styles.main,
          content: styles.content
        }}
        title={title}
        description={description}
      >
        {children}
      </BasicPageLayout>
    </div>
  );
};

UserSettingsLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node.isRequired
};

UserSettingsLayout.defaultProps = {
  title: "",
  description: ""
};

export default UserSettingsLayout;
