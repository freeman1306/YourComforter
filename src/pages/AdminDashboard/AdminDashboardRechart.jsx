import React from "react";
import Chart from "react-apexcharts";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  linearGradient,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar
} from "recharts";
import AdminCard from "./AdminCard";
import TopCard from "./TopCard";
import TopNav from "./TopNav";
import ChartHead from "./ChartHead";
import SectionTopAdminCards from "./SectionTopAdminCards";
import styles from "./AdminDashboard.module.scss";
import classNames from "classnames";

import {
  tesDataForSectionTopAdminCards,
  tempDayData,
  testName,
  bar,
  pie,
  statePie,
  area
} from "./testData";

const data = [
  {
    name: "18",
    uv: 330
  },
  {
    name: "19",
    uv: 280
  },
  {
    name: "20",
    uv: 210
  },
  {
    name: "21",
    uv: 200
  },
  {
    name: "22",
    uv: 280
  },
  {
    name: "23",
    uv: 305
  }
];

const dataPieRechart = [
  { name: "Profissionals", value: 579366 },
  { name: "Seekers", value: 678877 }
];

const dataLineChart01 = [
  { name: 18, Professionals: 120, Admins: 210, Seekers: 325 },
  { name: 19, Professionals: 190, Admins: 240, Seekers: 350 },
  { name: 20, Professionals: 90, Admins: 220, Seekers: 290 },
  { name: 21, Professionals: 205, Admins: 290, Seekers: 230 },
  { name: 22, Professionals: 185, Admins: 250, Seekers: 370 },
  { name: 23, Professionals: 210, Admins: 300, Seekers: 400 }
];

const dataBar01 = [
  { name: ">21", Mans: 55, Womens: 45 },
  { name: "21-30", Mans: 53, Womens: 47 },
  { name: "31-40", Mans: 77, Womens: 70 },
  { name: "31-40", Mans: 62, Womens: 20 },
  { name: "41-50", Mans: 38, Womens: 26 },
  { name: "<60", Mans: 28, Womens: 30 }
];

const pieColor = ["#581F77", "#EFBB40"];

const PieLegend = ({ title1, title2 }) => {
  return (
    <div className={styles.legends}>
      <div className={styles.pieLegend}>
        <span className={classNames(styles.legendColor, styles.colorLabel1)}>
          color1
        </span>
        <span className={styles.legendTitle}>{title1}</span>
      </div>

      <div className={styles.pieLegend}>
        <span className={classNames(styles.legendColor, styles.colorLabel2)}>
          color1
        </span>
        <span className={styles.legendTitle}>{title2}</span>
      </div>
    </div>
  );
};

const AdminDashboardRechart = () => {
  return (
    <div className={styles.adminWrapper}>
      <TopNav />

      <div className={styles.dashboardSection}>
        <SectionTopAdminCards countsData={tesDataForSectionTopAdminCards} />

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>Total # of users registered</h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.borderTable)}>
              <ChartHead
                startDay={tempDayData.startDay}
                stopDay={tempDayData.stopDay}
              />
              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 50
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#BA83D8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#BA83D8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <XAxis dataKey="name" padding={{ left: 25 }}></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8B8B8B"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Total registrations (last week)" count="856" />

              <AdminCard title="Total registrations (all time)" count="124" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Correlation of Professionals to Seekers
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.pieTable)}>
              <div style={{ width: 600, height: 600 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      cx={250}
                      cy={350}
                      data={dataPieRechart}
                      // label
                    >
                      {dataPieRechart.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColor[index % pieColor.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.pieLegendWrap}>
                <PieLegend title1="Profesionals" title2="Seekers" />
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Total number of seekers" count="579 366" />

              <AdminCard title="Total number of profesionals" count="678 877" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Average number of logins per Seeker/Pro at line chart.
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.borderTable)}>
              <ChartHead
                startDay={tempDayData.startDay}
                stopDay={tempDayData.stopDay}
              />

              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <LineChart
                    width={600}
                    height={300}
                    data={dataLineChart01}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <Legend
                      iconType="line"
                      layout="horizontal"
                      align="left"
                      verticalAlign="bottom"
                    />
                    <Line
                      type="monotone"
                      dataKey="Professionals"
                      stroke="#581f77"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Admins" stroke="#b9001e" />
                    <Line type="monotone" dataKey="Seekers" stroke="#efbb40" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Professionals logins" count="432" small />

              <AdminCard title="Seekers login" count="231" small />

              <AdminCard title="Admins login" count="421" small />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Total # of orders and line chart.
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.borderTable)}>
              <ChartHead
                startDay={tempDayData.startDay}
                stopDay={tempDayData.stopDay}
              />

              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 50
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#BA83D8"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#BA83D8"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <XAxis dataKey="name" padding={{ left: 25 }}></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke="#8B8B8B"
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Average # of orders (last week)" count="302" />

              <AdminCard title="Average # of orders (all time)" count="1,235" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Total # of logins per selected period and line chart.
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.borderTable)}>
              <ChartHead
                startDay={tempDayData.startDay}
                stopDay={tempDayData.stopDay}
              />

              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <LineChart
                    width={600}
                    height={300}
                    data={dataLineChart01}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <Legend
                      iconType="line"
                      layout="horizontal"
                      align="left"
                      verticalAlign="bottom"
                    />
                    <Line
                      type="monotone"
                      dataKey="Professionals"
                      stroke="#581f77"
                      activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="Admins" stroke="#b9001e" />
                    <Line type="monotone" dataKey="Seekers" stroke="#efbb40" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Professionals logins" count="432" small />

              <AdminCard title="Seekers login" count="231" small />

              <AdminCard title="Admins login" count="421" small />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Total # of different orders by status
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.pieTable)}>
              <div style={{ width: 600, height: 600 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      cx={250}
                      cy={350}
                      data={dataPieRechart}
                      // label
                    >
                      {dataPieRechart.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColor[index % pieColor.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.pieLegendWrap}>
                <PieLegend title1="In progress" title2="Finished" />
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Total number of seekers" count="579 366" />

              <AdminCard title="Total number of profesionals" count="678 877" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>
            Average number of users by different subscriptions plans
          </h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.pieTable)}>
              <div style={{ width: 600, height: 600 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      dataKey="value"
                      cx={250}
                      cy={350}
                      data={dataPieRechart}
                      // label
                    >
                      {dataPieRechart.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColor[index % pieColor.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className={styles.pieLegendWrap}>
                <PieLegend title1="Econom" title2="Golden plan" />
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard title="Golden plan total" count="579 366" />

              <AdminCard title="Econom plan total" count="678 877" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock, styles.topCardsBlock)}>
          <TopCard head="Most active users" cardData={testName} />

          <TopCard head="Top 10 seekers" cardData={testName} />

          <TopCard head="Top 10 professionals" cardData={testName} />

          <TopCard head="Most active users" cardData={testName} />
        </div>

        <div className={classNames(styles.infoBlock)}>
          <h4 className={styles.blockTitle}>Professionals Age/ Gender</h4>

          <div className={styles.chartCard}>
            <div className={classNames(styles.chartTable, styles.borderTable)}>
              <ChartHead
                startDay={tempDayData.startDay}
                stopDay={tempDayData.stopDay}
              />

              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <BarChart width={730} height={250} data={dataBar01}>
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <XAxis dataKey="name" padding={{ left: 25 }}></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mans" fill="#581f77" />
                    <Bar dataKey="Womens" fill="#efbb40" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard
                title="Professionals"
                maleCount="41"
                femaleCount="59"
              />

              <AdminCard title="Seekers" maleCount="50" femaleCount="50" />
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
              />

              <div style={{ width: "100%", height: "622px" }}>
                <ResponsiveContainer>
                  <BarChart width={730} height={250} data={dataBar01}>
                    <CartesianGrid stroke="#ccc" vertical={false} />
                    <XAxis dataKey="name" padding={{ left: 25 }}></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Mans" fill="#581f77" />
                    <Bar dataKey="Womens" fill="#efbb40" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className={styles.cardTable}>
              <AdminCard
                title="Professionals"
                maleCount="41"
                femaleCount="59"
              />

              <AdminCard title="Seekers" maleCount="50" femaleCount="50" />
            </div>
          </div>
        </div>

        <div className={classNames(styles.infoBlock)}>
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
        </div>

        <div className={classNames(styles.infoBlock, styles.topCardsBlock)}>
          <TopCard
            head="Most popular services by professionals"
            cardData={testName}
          />

          <TopCard
            head="Least popular services by professionals"
            cardData={testName}
          />

          <TopCard
            head="Most popular services by seekers"
            cardData={testName}
          />

          <TopCard
            head="Least popular services by seekers"
            cardData={testName}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardRechart;
