import React from "react";
import { GoTerminal } from "react-icons/go";
import { IconContext } from "react-icons";
import GitHubCalendar from "react-github-calendar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useWeeklyStats } from "../../../../utilities/hooks/github/useWeeklyStats";

export default function UserActivityComponent({ username }) {
  const weeklyStats = useWeeklyStats(username)
  const PRCount = !weeklyStats ? 0 : weeklyStats.PRCount
  const IssueCount = !weeklyStats ? 0 : weeklyStats.IssueCount
  const commitCount = !weeklyStats ? 0 : weeklyStats.commitCount
  ChartJS.register(ArcElement, Tooltip, Legend);
  const USER_NAME = username;
  const data = {
    labels: ["커밋", "풀리퀘스트", "이슈"],
    datasets: [
      {
        data: [commitCount, PRCount, IssueCount],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  return (
    <div className="flex flex-col max-w-5xl w-full bg-white dark:bg-gray-800 p-10">
      {/* component title */}
      <div className="flex mb-5">
        <IconContext.Provider
          value={{ className: "mr-2 w-4 h-4 dark:text-blue-500" }}
        >
          <GoTerminal />
          <span className="text-xs dark:text-gray-200">
            {USER_NAME}'s Activity
          </span>
        </IconContext.Provider>
      </div>
      {/* content Card Area */}
      <div className="lg:flex lg:flex-row flex-col justify-center items-center relative">
        <div className="flex flex-col items-center lg:w-2/5 lg:mr-5 h-72 rounded-xl border border-gray-200 bg-white">
          <div className="justify-start items-start w-full p-5">
            <h2 class="text-gray-800 text-xl font-semibold">Total Activity</h2>
            <h6 class="text-gray-400 text-xs font-semibold">
              최근 15일간 활동 통계
            </h6>
          </div>

          <div className="w-64 h-64 lg:absolute lg:top-10">
            <Pie
              data={data}
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: "right",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="flex flex-col h-72 lg:w-3/5 mt-5 lg:mt-0 items-center rounded-lg border border-gray-200 bg-white">
          <div className="justify-start items-start w-full p-5">
            <h2 class="text-gray-800 text-xl font-semibold">Git Activity</h2>
            <h6 class="text-gray-400 text-xs font-semibold">
              반년간의 깃허브 기여 기록
            </h6>
          </div>
          <div className="px-5">
            {
              !weeklyStats ? <></> 
              : <GitHubCalendar
              transformData={selectLastHalfYear}
              blockMargin={5}
              blockRadius={4}
              blockSize={12}
              fontSize={12}
              color="#10a3e8"
              username={USER_NAME}
              hideColorLegend={true}
              style={{ color: "gray" }}
              labels={{
                legend: {
                  less: "-",
                  more: "+",
                },
                months: [
                  "1월",
                  "2월",
                  "3월",
                  "4월",
                  "5월",
                  "6월",
                  "7월",
                  "8월",
                  "9월",
                  "10월",
                  "11월",
                  "12월",
                ],
                totalCount:
                  "오픈소스 생태계에 {{year}}년 최근 반년간 {{count}}회 기여",
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              }}
            />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
