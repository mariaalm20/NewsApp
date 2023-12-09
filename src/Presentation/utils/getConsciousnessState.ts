export const getConsciousnessState = (consciousness: string) => {
  if (consciousness === 'A') {
    return 'Alerta';
  }
  if (consciousness === 'F') {
    return 'Fala';
  }
  if (consciousness === 'D') {
    return 'Dor';
  }
  return 'Não fala';
};
