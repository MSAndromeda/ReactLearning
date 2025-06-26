export default function InvestmentCalc({ investment, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            id=""
            value={investment.initialInvestment}
            onChange={() => onChange("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            name=""
            id=""
            value={investment.annualInvestment}
            onChange={() => onChange("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            name=""
            id=""
            value={investment.expectedReturn}
            onChange={() => onChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            name=""
            id=""
            value={investment.duration}
            onChange={() => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
