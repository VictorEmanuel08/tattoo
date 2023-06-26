import { useState } from "react";
import "./ModalCalendar.scss";

export function ModalCalendar({ onClick, onDadosModalCalendar, onClose }) {
  const [data, setData] = useState("");
  const [newDate, setnewDate] = useState(""); //variavel para enviar (dd/mm/YYYY)
  const [nomeTatuador, setNomeTatuador] = useState("");
  const [imageTatuador, setImageTatuador] = useState("");

  const tatuadores = [
    {
      index: 0,
      nome: "tatuador 1",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 1,
      nome: "tatuador 2",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 2,
      nome: "tatuador 3",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 3,
      nome: "tatuador 4",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 4,
      nome: "tatuador 5",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 5,
      nome: "tatuador 6",
      userImage:
        "https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp",
    },
    {
      index: 6,
      nome: "Nenhuma preferência",
      userImage: "",
    },
  ];

  const handleDataChange = (e) => {
    const inputValue = e.target.value;
    setData(inputValue);
    if (inputValue.length <= 10) {
      const [year, month, day] = inputValue.split("-");
      setnewDate(`${day}/${month}/${year}`);
    }
  };

  const handleInfoTatuador = function (e) {
    const selectedIndex = e.target.value;
    // if (selectedIndex >= 0 && selectedIndex < tatuadores.length) {
    setNomeTatuador(tatuadores[selectedIndex].nome);
    setImageTatuador(tatuadores[selectedIndex].userImage);
    // }
  };

  const handleEnvair = () => {
    // Chama a função de callback do componente pai
    onDadosModalCalendar(nomeTatuador, imageTatuador, newDate);
    onClose();
  };

  return (
    <div className="calendar" onClick={onClick}>
      <div className="calendar-content">
        <span className="form-text">Agende sua tattoo:</span>
        <div className="form-items">
          <label htmlFor="data">Data:</label>
          <input
            className="form-data"
            type="date"
            id="data"
            name="data"
            value={data}
            onChange={handleDataChange}
            pattern="\d{2}/\d{2}/\d{4}"
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div className="form-items">
          <label htmlFor="nomes">Tatuador:</label>
          <select
            id="nomes"
            name="nomes"
            // value={nomeTatuador}
            onChange={handleInfoTatuador}
          >
            <option value="">Selecione um tatuador:</option>
            {tatuadores.map((tatuador) => (
              <option key={tatuador.index} value={tatuador.index}>
                {tatuador.nome}
              </option>
            ))}
          </select>
        </div>
        {imageTatuador.length > 0 ? (
          <div>
            <img src={imageTatuador} alt="imagem" />
          </div>
        ) : (
          ""
        )}
        {nomeTatuador.length > 0 && newDate.length > 0 ? (
          <div>
            <button type="button" onClick={handleEnvair}>
              Ok
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
