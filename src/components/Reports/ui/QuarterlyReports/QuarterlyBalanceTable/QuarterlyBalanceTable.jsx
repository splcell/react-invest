import { createTableData } from "../../../../../helpers/createTableData";
import { ReportsData } from "../../ReportsData/ReportsData";

export const QuarterlyBalanceTable = ({balance, profile}) => {
  const tableData = createTableData(balance);

  return (
    <ReportsData
      period="quarterly"
      report={tableData}
      reportType="Balance"
      profile={profile}
    />
  );
};
