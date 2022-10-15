import arrowDown from '../../images/arrow-down.png';

export function TableBody() {
  const lineIndex = [0, 1, 2, 3, 4, 6];

  return (
    <>
      <thead>
        <tr>
          <th>
            Дата и время <img src={arrowDown} alt="Arrow" />
          </th>
          <th>Номер</th>
          <th>Склад</th>
          <th>Поставщик</th>
          <th>Сумма</th>
          <th>Ответственный</th>
          <th>Статус</th>
          <th>Комментарий</th>
        </tr>
      </thead>

      <tbody>
        {lineIndex.map((line, index) => (
          <tr key={index}>{<td>ghghghgh</td>}</tr>
        ))}
      </tbody>
    </>
  );
}
