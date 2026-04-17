import "../styles/grid.css";

export default function GridInfo() {
  const items = [
    "PLANO DE DESENVOLVIMENTO INSTITUCIONAL",
    "PESQUISA P\u00daBLICA PROCESSOS IFTM",
    "LICITA\u00c7\u00d5ES E CONTRATOS",
    "RECEITAS E DESPESAS",
    "DADOS ABERTOS",
    "TRANSPAR\u00caNCIA E PRESTA\u00c7\u00c3O DE CONTAS",
    "SERVIDORES",
    "PERGUNTAS FREQUENTES",
  ];

  return (
    <section className="grid-info">
      <div className="container">
        {items.map((text, index) => (
          <div key={index} className="card">
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
