import "./style.sass";

function Jogadores() {
  return (
    <aside id="asideJogadores">
      <h2>Jogadores</h2>
      <ul>
        <li>
          <details>
            <summary>Cleyltonks Narok</summary>
            <span>Vida: </span>
            <progress value="70" max="100">
              70 %
            </progress>
            <br></br>
            <span>Magia: </span>
            <progress value="40" max="100">
              40 %
            </progress>
          </details>
        </li>
        <li>
          <details>
            <summary>Lukkacs Narok</summary>
            <p> It is a portal for geeks.</p>
          </details>
        </li>
        <li>
          <details>
            <summary>Moisés Narok</summary>
            <p> It is a portal for geeks.</p>
          </details>
        </li>
      </ul>
    </aside>
  );
}

export default Jogadores;
