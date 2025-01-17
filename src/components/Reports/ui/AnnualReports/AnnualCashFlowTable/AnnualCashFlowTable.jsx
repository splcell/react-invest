import { createTableData } from "../../../../../helpers/createTableData"
import { ReportsData } from "../../ReportsData/ReportsData"

export const AnnualCashFlowTable = ({cashFlow, profile}) => {
  const tableData = createTableData(cashFlow)

  return(
    <ReportsData 
      period="annual" 
      report={tableData} 
      reportType="Cash Flow"
      profile={profile}
    />
  )
}