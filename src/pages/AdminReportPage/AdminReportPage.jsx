import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import styles from "./AdminReportPage.module.scss";
// import Comment from "../../components/Comment/Comment";
// import PaginationWithoutRouter from "../../components/Pagination/PaginationWithoutRouter";
import ReportPageLayout from "../../layouts/ReportPageLayout/ReportPageLayout";
// import service from "../../service";
// import { UserContext } from "../../context/UserContext";
import ReportInfo from "./ReportInfo";
// import CompanionInfo from "./CompanionInfo";
// import ReportActions from "./ReportActions";
import Loading from "../../components/Loading/Loading";
import editOrderReview from "../../actions/orders/editOrderReview";
import Chat from "../../images/chat.png";
import { paths } from "../../routes";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import service from "../../service";
import {statusTypes} from "../../helpers/ordersData";

const AdminReportPage = ({ report }) => {
  const [isShownPopup, setIsShownPopup] = useState(false)

  const onRejectHandler = () =>{
    service.orderService.updateStatus(report.order_id, statusTypes.CANCELED)
    setIsShownPopup(!isShownPopup)
  }

  const onCompleteHandler = () =>{
    service.orderService.updateStatus(report.order_id, statusTypes.COMPLETED)
    setIsShownPopup(!isShownPopup)
  }

  if (!report.report_id)
    return <Loading style={{ height: "95vh", justifyContent: "center" }} />;

  return (
    <ReportPageLayout
      service={report.service}
      reportId={report.report_id}
      status={report.status}
      subject={report.subject_line}
      terminateHandle={()=>{setIsShownPopup(!isShownPopup)}}
    >
    {isShownPopup &&

      <Popup 
        title="Select an option"
        icon="attention"
        closeAction={()=>{setIsShownPopup(!isShownPopup)}}
        acceptButton={<Button onClick={onCompleteHandler}>Complete the order</Button>}
        button={<Button onClick={onRejectHandler}>Reject the order</Button>}
      />
    }

      <div className={styles.jobDetailsWrap}>
        <ReportInfo
          date={report.date}
          duration={report.duration}
          amount={report.rate}
          status={report.status}
        />
        <div className={styles.companionFriendsWrap}>
          <div className={styles.left}>
            <>
              <p className={styles.users}>
                <span>
                  Professional:
                  <a
                    href={`${paths.profile}/${report.comforter_id}`}
                  >{`${report.comforter}`}</a>
                </span>
                <img
                  src={Chat}
                  style={{ cursor: "pointer" }}
                  alt="chat"
                  onClick={() => {
                    window.open(`mailto:${report.comforter_email}`);
                  }}
                />
              </p>
              <p className={styles.users}>
                <span>
                  Seeker:
                  <a
                    href={`${paths.profile}/${report.seeker_id}`}
                  >{`${report.seeker}`}</a>
                </span>
                <img
                  src={Chat}
                  style={{ cursor: "pointer" }}
                  alt="chat"
                  onClick={() => {
                    window.open(`mailto:${report.seeker_email}`);
                  }}
                />
              </p>
              <p>
                Location: <span>{report.location}</span>
              </p>
              <p className={styles.friendsTitle}>Trusted company friends:</p>
              {report.companions &&
                report.companions.map(friend => (
                  <p className={styles.friendItem} key={friend.id}>
                    {`${friend.first_name} ${friend.last_name},`}{" "}
                    <span>{friend.district}</span>
                  </p>
                ))}
            </>
          </div>
          <div className={styles.right}>
            <div>
              <p className={styles.noteTitle}>Note:</p>
              <p className={styles.noteMessage}>{report.note}</p>
            </div>
            <div className={styles.reportText}>
              <p className={styles.noteTitle}>Report Text:</p>
              <p className={styles.noteMessage}>{report.report_text}</p>
            </div>
          </div>
        </div>
      </div>
    </ReportPageLayout>
  );
};

AdminReportPage.propTypes = {
  isSeeker: PropTypes.bool.isRequired,
  report: PropTypes.object.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onOrderReject: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  editOrderReview
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(AdminReportPage));
