import { createTableData } from "../../../../../helpers/createTableData";
import { ReportsData } from "../../ReportsData/ReportsData";

export const AnnualBalanceTable = ({ balance, profile }) => {
  const tableData = createTableData(balance)

  return (
    <ReportsData
      period="annual"
      report={tableData}
      reportType="Balance"
      profile={profile}
    />
  );
};
