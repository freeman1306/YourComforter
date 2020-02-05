import React, {useEffect, useContext} from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./UserVerifyEmailFinishLayout.module.scss";

import VerificationLayout from "../VerificationLayout/VerificationLayout";
import { UserContext } from "../../context/UserContext";

const UserVerifyEmailFinishLayout = (props) => {
    const userContext = useContext(UserContext);

    useEffect(()=>{
        userContext.toggleActivation()
        if(userContext.emailActivated){
            setTimeout(()=>{
                props.history.push('/')
            }, 5000)
        }
    }, [props.history, userContext]);
    return (
        <VerificationLayout>
            <div>
                <h3 className={classNames("textC", styles.mainTitle)}>Your mail has been verified!</h3>
                <p className={classNames(styles.description, "smallText", "textC")}>
                    The following email:**hn@gmail.com, verified. Now you can verify you phone number. You will be redirected to
                    the main page in 5 seconds.
                </p>
                <Link to='/' className={classNames("text", "textC", styles.link)}>
                {/*<Link to="verification/mobile" className={classNames("text", "textC", styles.link)}>*/} {/*In the future the link will redirect to mobile verification*/}
                    Redirect now
                </Link>
            </div>
        </VerificationLayout>
    );
};

export default UserVerifyEmailFinishLayout;
