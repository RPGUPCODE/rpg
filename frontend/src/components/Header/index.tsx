import "./style.sass"

function Header() {
  return (
    <header>
      <h2>RPG de Mesa</h2>
      <ul>
        <li>
          <nobr>Nome da Campanha:</nobr>
        </li>
        <li>
          <nobr>
            <strong>
              <em>Retorno à Parolit</em>
            </strong>
          </nobr>
        </li>
        <li>|</li>
        <li>
          <nobr>Mestre:</nobr>
        </li>
        <li>
          <nobr>
            <strong>
              <em>Marin</em>
            </strong>
          </nobr>
        </li>
      </ul>
    </header>
  );
}

export default Header;
