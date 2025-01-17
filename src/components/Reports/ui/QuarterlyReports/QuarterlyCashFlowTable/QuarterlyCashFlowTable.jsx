import { createTableData } from "../../../../../helpers/createTableData"
import { ReportsData } from "../../ReportsData/ReportsData"

export const QuarterlyCashFlowTable = ({cashFlow, profile}) => {
  const tableData = createTableData(cashFlow)

  return(
    <ReportsData 
      period="quarterly" 
      report={tableData} 
      reportType="Cash Flow"
    />
  )
}