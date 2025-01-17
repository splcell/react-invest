import { createTableData } from "../../../../../helpers/createTableData";
import { ReportsData } from "../../ReportsData/ReportsData";

export const AnnualIncomeTable = ({ income, profile }) => {
  const tableData = createTableData(income);

  return (
    <ReportsData
      period="annual"
      report={tableData}
      reportType="Income"
      profile={profile}
    />
  );
};
