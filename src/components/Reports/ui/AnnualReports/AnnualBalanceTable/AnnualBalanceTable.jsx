import { ReportsData } from "../../ReportsData/ReportsData";

export const AnnualBalanceTable = ({ balance, profile }) => {
  const tableData = balance ? [...balance.results].reverse() : [];

  return (
    <ReportsData
      period="annual"
      report={tableData}
      reportType="Balance"
      profile={profile}
    />
  );
};
