export const formatarDataHoraBrasileira = (date: Date) => {
  const diasDaSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const mesesDoAno = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const diaSemana = diasDaSemana[date.getDay()];
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = mesesDoAno[date.getMonth()];
  const ano = date.getFullYear();
  const horas = String(date.getHours()).padStart(2, '0');
  const minutos = String(date.getMinutes()).padStart(2, '0');
  const segundos = String(date.getSeconds()).padStart(2, '0');

  return `${diaSemana}, ${dia} de ${mes} de ${ano} ${horas}:${minutos}:${segundos}`;
};

const timestamp = Date.now();
const date = new Date(timestamp);

export const formattedDate = formatarDataHoraBrasileira(date);
