import temperaturaIcon from './assets/icons/patientsIcons/temperatura.svg';
import heartIcon from './assets/icons/patientsIcons/heart.svg';
import respIcon from './assets/icons/patientsIcons/resp.svg';
import pressaoIcon from './assets/icons/patientsIcons/pressao.svg';
import o2Icon from './assets/icons/patientsIcons/o2.svg';

export const getColorIconBySignal = (vitalSign: string) => {
  if (vitalSign === 'Temperatura') {
    return {
      color: 'bg-orange',
      Icon: temperaturaIcon,
    };
  } else if (vitalSign === 'Freq. cardíaca') {
    return {
      color: 'bg-red',
      Icon: heartIcon,
    };
  } else if (vitalSign === 'Freq. respiratória') {
    return {
      color: 'bg-blue',
      Icon: respIcon,
    };
  } else if (vitalSign === 'Pressão arterial') {
    return {
      color: 'bg-yellow',
      Icon: pressaoIcon,
    };
  } else {
    return {
      color: 'bg-green',
      Icon: o2Icon,
    };
  }
};
