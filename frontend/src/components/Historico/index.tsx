import "./style.sass"

function Historico() {
  return (
    <aside id="asideHistorico">
      <h2>Histórico</h2>
      <ul>
        <li className="historicoInicioJogo">Início do jogo</li>
        <li>Encontrou Ragnar</li>
        <li>Pegou Faca Açougueiro 🔪</li>
        <li>Pegou Escudo Bronze 🛡️</li>
        <li>Encontrou Goblin 👹</li>
        <li>Batalha ... ⚔️</li>
        <li>...Vitória + 10XP + 5💲</li>
        <li>Entrou no Calabouço de Parolit 🏛️</li>
        <li>Encontrou Dragão Azul 🐉 🔵</li>
        <li>Batalha ... ⚔️</li>
        <li>Morréeeu. 💀</li>
        <li className="historicoFimJogo">FIM DO JOGO.</li>
      </ul>
    </aside>
  );
}

export default Historico;
