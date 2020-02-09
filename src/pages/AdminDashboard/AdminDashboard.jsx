import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import moment from "moment";

import AdminCard from "./AdminCard";
import TopCard from "./TopCard";
import TopNav from "./TopNav";
import ChartHead from "./ChartHead";
import SectionTopAdminCards from "./SectionTopAdminCards";
import styles from "./AdminDashboard.module.scss";
import Loading from "../../components/Loading/Loading";
import getStatistics from "../../actions/statistics/getStatistics";
import service from "../../service";

import {
  tempDayData,
  // testName,
  bar,
  pie,
  // statePie,
  // area
} from "./testData";

const AdminDashboard = ({
  getStatistics,
  loading, 
  statistics: {
    numbers,
    registrationInfo,
    correlation,
    averageOrderInfo,
    seekersGenderPercent,
    comfortersGenderPercent,
    comfortersAgeWithGender,
    seekersAgeWithGender,
    differentStatus,
    comfortersSubscriptionPlans
  }
}) => {
  const initialState = {
    period: {
      start: moment().subtract(1, 'weeks').format("MMMM DD, YYYY"), 
      end: moment().format("MMMM DD, YYYY")
    },
    areaData: {
      options: {
        colors: "black",
        fill: {
          colors: "#BA83D8"
        },
        dataLabels: {
          style: {
            colors: ["lime"]
          }
        },
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: []
        }
      },
      series: [
        {
          name: "User",
          data: []
        }
      ]
    }
  }

  const [registrations, setRegistrations] = useState({...initialState});
  const [orders, setOrders] = useState({...initialState});
  const [topSeekers, setTopSeekers] = useState([]);
  const [topComforters, setTopComforters] = useState([]);
  const [popularServices, setPopularServices] = useState([]);
  const [unpopularServices, setUnpopularServices] = useState([]);


  useEffect (() => {
    getStatistics();
    fetchRegistrations("week");
    fetchTotalOrders("week");
    fetchTopSeekers("week");
    fetchTopComforters("week");
    fetchPopularServices("week");
    fetchUnpopularServices("week");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  const fetchRegistrations = async period => {
    let registrationsObj = {};
    const result = await service.adminService.getRegistrations(period);
    
    for(const item of result.totalRegistrationsForPeriod.reverse()){
      registrationsObj = {...registrationsObj, ...item};
    };

    setRegistrations({
      period: {
        ...registrations.period,
        start: moment().subtract(1, (period+'s')).format("MMMM DD, YYYY")
      },
      areaData: {
        options: {
          ...registrations.areaData.options,
          xaxis: {
            categories: Object.keys(registrationsObj)
          }
        },
        series: [
          {
            name: "User",
            data: Object.values(registrationsObj)
          }
        ]
      }
    });
  };

  const fetchTopSeekers = async period => {
    const result = await service.adminService.getTopSeekers(period);
    setTopSeekers([...result.topSeekers]);
  }

  const fetchTopComforters = async period => {
    const result = await service.adminService.getTopComforters(period);
    setTopComforters([...result.topComforters]);
  }

  const fetchPopularServices = async period => {
    const result = await service.adminService.getPopularServices(period);
    setPopularServices([...result.popularServices]);
  }

  const fetchUnpopularServices = async period => {
    const result = await service.adminService.getUnpopularServices(period);
    setUnpopularServices([...result.unpopularServices]);
  }

  const fetchTotalOrders = async period => {
    let totalOrdersObj = {};
    const result = await service.adminService.getTotalOrders(period);
    
    for(const item of result.ordersCountForPeriod.reverse()){
      totalOrdersObj = {...totalOrdersObj, ...item};
    };

    setOrders({
      period: {
        ...orders.period,
        start: moment().subtract(1, (period+'s')).format("MMMM DD, YYYY")
      },
      areaData: {
        options: {
          ...orders.areaData.options,
          xaxis: {
            categories: Object.keys(totalOrdersObj)
          }
        },
        series: [
          {
            name: "Order",
            data: Object.values(totalOrdersObj)
          }
        ]
      }
    });
  };

  const getTotalRegistrationsLastWeek = (regObj) => {
    let sum = 0;
    for(const item of regObj){
      sum += Object.values(item).reduce((sum, key)=>(sum + key));
    }
    return sum;
  }

  const getOrdersByStatusNames = (ordersStatus) => {
    const statusObj = {
      cancelledOrders: "Cancelled",
      completedComforters: "Completed Comforters",
      completedOrders: "Completed",
      in_disputeOrders: "In dispute",
      in_progressOrders: "In progress",
      pending_a_paymentOrders: "Pending a payment",
      pending_confirmationOrders: "Pending confirmation",
      requestedOrders: "Requested",
      waiting_for_an_orderOrders: "Waiting for an order"
    };
    const statusNames = [];

    for (const item of Object.keys(ordersStatus)) {
      statusNames.push(statusObj[item]);
    }
    return statusNames;
  }

  const getPlansNames = (plans) => {
    const plansObj = {
      risingStar: "Rising Star",
      theChampion: "The Champion",
      theElite: "The Elite"
    };
    const plansNames = [];

    for (const item of Object.keys(plans)) {
      plansNames.push(plansObj[item]);
    }
    return plansNames;
  }

  return (
    <div className={styles.adminWrapper}>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <TopNav />
            <div className={styles.dashboardSection}>
              <SectionTopAdminCards countsData={numbers} id="numbers"/>

              <div className={classNames(styles.infoBlock)} id="registration-info">
                <h4 className={styles.blockTitle}>Total # of users registered</h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={registrations.period.start}
                      stopDay={registrations.period.end}
                      changePeriod={fetchRegistrations}
                    />

                    <Chart
                      options={registrations.areaData.options}
                      series={registrations.areaData.series}
                      type="area"
                      // height="350"
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard 
                      title="Total registrations (last week)" 
                      count={getTotalRegistrationsLastWeek(registrationInfo.totalRegistrationsLastWeek)} 
                    />

                    <AdminCard 
                      title="Total registrations (all time)" 
                      count={registrationInfo.totalRegistrations} 
                    />
                  </div>
                </div>
              </div>

              <div className={classNames(styles.infoBlock)} id="seekers-professionals">
                <h4 className={styles.blockTitle}>
                  Correlation of Professionals to Seekers
                </h4>

                <div className={styles.chartCard}>
                  <div className={styles.chartTable}>
                    CHART 02
                    <Chart
                      options={pie.options}
                      series={[correlation.allSeekers, correlation.sllComforters]}
                      type="pie"
                      width="600"
                      colors={["#EFBB40", "#581F77"]}
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="Total number of seekers" count={correlation.allSeekers} />

                    <AdminCard title="Total number of profesionals" count={correlation.sllComforters} />
                  </div>
                </div>
              </div>

              {/* <div className={classNames(styles.infoBlock)} id="logins">
                <h4 className={styles.blockTitle}>
                  Average number of logins per Seeker/Pro at line chart.
                </h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={tempDayData.startDay}
                      stopDay={tempDayData.stopDay}
                    />

                    <Chart options={bar.options} series={bar.series} type="line" />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="Professionals logins" count="432" small />

                    <AdminCard title="Seekers login" count="231" small />

                    <AdminCard title="Admins login" count="421" small />
                  </div>
                </div>
              </div> */}

              <div className={classNames(styles.infoBlock)}>
                <h4 className={styles.blockTitle}>
                  Total # of orders and line chart.
                </h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={orders.period.start}
                      stopDay={orders.period.end}
                      changePeriod={fetchTotalOrders}
                    />

                    <Chart
                      options={orders.areaData.options}
                      series={orders.areaData.series}
                      type="area"
                      // height="350"
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="Average # of orders (last week)" count={averageOrderInfo.averageOrdersLastWeek} />

                    <AdminCard title="Average # of orders (all time)" count={averageOrderInfo.averageOrders} />
                  </div>
                </div>
              </div>

              {/* <div className={classNames(styles.infoBlock)} >
                <h4 className={styles.blockTitle}>
                  Total # of logins per selected period and line chart.
                </h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={tempDayData.startDay}
                      stopDay={tempDayData.stopDay}
                    />

                    <Chart options={bar.options} series={bar.series} type="line" />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="Professionals logins" count="432" small />

                    <AdminCard title="Seekers login" count="231" small />

                    <AdminCard title="Admins login" count="421" small />
                  </div>
                </div>
              </div> */}

              <div className={classNames(styles.infoBlock)} id="orders-by-status">
                <h4 className={styles.blockTitle}>
                  Total # of different orders by status
                </h4>

                <div className={styles.chartCard}>
                  <div className={styles.chartTable}>
                    CHART 06
                    <Chart
                      options={{
                        labels: getOrdersByStatusNames(differentStatus)
                      }}
                      series={[...Object.values(differentStatus)]}
                      type="pie"
                      width="600"
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="Total number of seekers" count={correlation.allSeekers} />

                    <AdminCard title="Total number of profesionals" count={correlation.sllComforters} />
                  </div>
                </div>
              </div>

              <div className={classNames(styles.infoBlock)} id="subscriptions-plans">
                <h4 className={styles.blockTitle}>
                  Average number of users by different subscriptions plans
                </h4>

                <div className={styles.chartCard}>
                  <div className={styles.chartTableSubscPlans}>
                    CHART 07
                    <Chart
                      options={{
                        labels: getPlansNames(comfortersSubscriptionPlans)
                      }}
                      series={[...Object.values(comfortersSubscriptionPlans)]}
                      type="pie"
                      width="600"
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard title="The Champion plan total" count={comfortersSubscriptionPlans.theChampion} small />
                    <AdminCard title="The Elite plan total" count={comfortersSubscriptionPlans.theElite} small />
                    <AdminCard title="Rising Star plan total" count={comfortersSubscriptionPlans.risingStar} small />
                  </div>
                </div>
              </div>

              <div className={classNames(styles.infoBlock, styles.topCardsBlock)} id="active-users">
                {/* <TopCard head="Most active users" cardData={testName} /> */}

                <TopCard head="Top 10 seekers" cardData={topSeekers} changePeriod={fetchTopSeekers}/>

                <TopCard head="Top 10 professionals" cardData={topComforters} changePeriod={fetchTopComforters}/>

                {/* <TopCard head="Most active users" cardData={testName} /> */}
              </div>

              <div className={classNames(styles.infoBlock)}>
                <h4 className={styles.blockTitle}>Professionals Age/ Gender</h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={tempDayData.startDay}
                      stopDay={tempDayData.stopDay}
                      changePeriod={()=>{}}
                    />

                    <Chart 
                      options={bar.options} 
                      series={
                        [
                          {
                            name: "Male",
                            data: [
                              comfortersAgeWithGender.before21.male,
                              comfortersAgeWithGender["21-30"].male,
                              comfortersAgeWithGender["31-40"].male,
                              comfortersAgeWithGender["41-50"].male,
                              comfortersAgeWithGender["51-60"].male,
                              comfortersAgeWithGender.after60.male
                            ]
                          },
                          {
                            name: "Female",
                            data: [
                              comfortersAgeWithGender.before21.female,
                              comfortersAgeWithGender["21-30"].female,
                              comfortersAgeWithGender["31-40"].female,
                              comfortersAgeWithGender["41-50"].female,
                              comfortersAgeWithGender["51-60"].female,
                              comfortersAgeWithGender.after60.female
                            ]
                          }
                        ]
                      } 
                      type="bar" 
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard
                      title="Professionals"
                      maleCount={Math.round(comfortersGenderPercent.male)}
                      femaleCount={Math.round(comfortersGenderPercent.female)}
                    />

                    <AdminCard 
                      title="Seekers" 
                      maleCount={Math.round(seekersGenderPercent.male)} 
                      femaleCount={Math.round(seekersGenderPercent.female)} 
                    />
                  </div>
                </div>
              </div>

              <div className={classNames(styles.infoBlock)}>
                <h4 className={styles.blockTitle}>Seekers Age/ Gender</h4>

                <div className={styles.chartCard}>
                  <div className={classNames(styles.chartTable, styles.borderTable)}>
                    <ChartHead
                      startDay={tempDayData.startDay}
                      stopDay={tempDayData.stopDay}
                      changePeriod={()=>{}}
                    />

                    <Chart 
                      options={bar.options} 
                      series={
                        [
                          {
                            name: "Male",
                            data: [
                              seekersAgeWithGender.before21.male,
                              seekersAgeWithGender["21-30"].male,
                              seekersAgeWithGender["31-40"].male,
                              seekersAgeWithGender["41-50"].male,
                              seekersAgeWithGender["51-60"].male,
                              seekersAgeWithGender.after60.male
                            ]
                          },
                          {
                            name: "Female",
                            data: [
                              seekersAgeWithGender.before21.female,
                              seekersAgeWithGender["21-30"].female,
                              seekersAgeWithGender["31-40"].female,
                              seekersAgeWithGender["41-50"].female,
                              seekersAgeWithGender["51-60"].female,
                              seekersAgeWithGender.after60.female
                            ]
                          }
                        ]
                      } 
                      type="bar" 
                    />
                  </div>

                  <div className={styles.cardTable}>
                    <AdminCard
                      title="Professionals"
                      maleCount={Math.round(comfortersGenderPercent.male)}
                      femaleCount={Math.round(comfortersGenderPercent.female)}
                    />

                    <AdminCard 
                      title="Seekers" 
                      maleCount={Math.round(seekersGenderPercent.male)} 
                      femaleCount={Math.round(seekersGenderPercent.female)} 
                    />
                  </div>
                </div>
              </div>

              {/* <div className={classNames(styles.infoBlock)} id="geography">
                <h4 className={styles.blockTitle}>Geography</h4>

                <div className={styles.chartCard}>
                  <div
                    className={classNames(styles.chartTable, styles.fullSizeChart)}
                  >
                    CHART 10 Full size
                    <Chart
                      options={statePie.options}
                      series={statePie.series}
                      type="pie"
                      width="600"
                    />
                  </div>
                </div>
              </div> */}

              <div className={classNames(styles.infoBlock, styles.topCardsBlock)}>
                <TopCard
                  head="Popular services"
                  cardData={popularServices}
                  changePeriod={fetchPopularServices}
                />

                <TopCard
                  head="Unpopular services"
                  cardData={unpopularServices}
                  changePeriod={fetchUnpopularServices}
                />

                {/* <TopCard
                  head="Most popular services by seekers"
                  cardData={popularServices.bySeekers}
                />

                <TopCard
                  head="Least popular services by seekers"
                  cardData={testName}
                /> */}
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

AdminDashboard.propTypes = {
  getStatistics: PropTypes.func,
  loading: PropTypes.bool,
  statistics: PropTypes.shape({
    numbers: PropTypes.object,
    registrationInfo: PropTypes.object,
    correlation: PropTypes.object,
    averageOrderInfo: PropTypes.object,
    differentStatus: PropTypes.object,
    seekersSubscriptionPlans: PropTypes.object,
    comfortersSubscriptionPlans: PropTypes.object,
    topSeekers: PropTypes.array,
    topComforters: PropTypes.array,
    seekersGenderPercent: PropTypes.object,
    comfortersGenderPercent: PropTypes.object,
    seekersAgeWithGender: PropTypes.object,
    comfortersAgeWithGender: PropTypes.object,
    popularServices: PropTypes.array,
    unpopularServices: PropTypes.array,
    ordersForWeek: PropTypes.array
  })
};

AdminDashboard.defaultProps = {
  getStatistics: () => {},
  loading: true,
  statistics: {
    numbers: {},
    registrationInfo: {},
    correlation:{},
    averageOrderInfo: {},
    differentStatus: {},
    seekersSubscriptionPlans: {},
    comfortersSubscriptionPlans: {},
    topSeekers: [],
    topComforters: [],
    seekersGenderPercent: {},
    comfortersGenderPercent: {},
    seekersAgeWithGender: {},
    comfortersAgeWithGender: {},
    popularServices: [],
    unpopularServices: [],
    ordersForWeek: []
  }
};

export default connect(
  state => ({
    statistics: state.statistics.dashboardData,
    loading: state.statistics.loading
  }),
  { getStatistics }
)(AdminDashboard);
