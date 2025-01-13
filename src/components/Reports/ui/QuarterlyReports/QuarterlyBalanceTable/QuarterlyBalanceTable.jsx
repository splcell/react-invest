import { ReportsData } from "../../ReportsData/ReportsData";

export const QuarterlyBalanceTable = ({balance, profile}) => {
  const tableData = balance ? [...balance]?.reverse() : [];

  console.log(balance, 'balance')

  return (
    <ReportsData
      period="quarterly"
      report={tableData}
      reportType="Balance"
      profile={profile}
    />
  );
};
