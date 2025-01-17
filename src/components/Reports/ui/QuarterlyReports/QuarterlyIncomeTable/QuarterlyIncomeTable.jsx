import { createTableData } from "../../../../../helpers/createTableData";
import { ReportsData } from "../../ReportsData/ReportsData";

export const QuarterlyIncomeTable = ({ income, profile }) => {
  const tableData = createTableData(income);

  return (
    <ReportsData
      period="quarterly"
      report={tableData}
      reportType="Income"
      profile={profile}
    />
  );
};
