import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvesmtent =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {resultsData.map((yearData) => {
        const totalInterest =
          yearData.valueEndOfYear - yearData.year * initialInvesmtent;
        const totalAmpuntInvested = yearData.valueEndOfYear - totalInterest;

        return (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.valueEndOfYear)}</td>
            <td>{formatter.format(yearData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmpuntInvested)}</td>
          </tr>
        );
      })}
      <tbody></tbody>
    </table>
  );
}
