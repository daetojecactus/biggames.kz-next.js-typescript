//Интерфейс City
interface City {
  value: number;
  label: string;
}

// массив CityData с объектами, которые соответсвуют интерфейсу City
const CityData: City[] = [
  { value: 1, label: "Астана" },
  { value: 2, label: "Алматы" },
  { value: 3, label: "Шымкент" },
  { value: 4, label: "Атырау" },
  { value: 5, label: "Актау" },
];

//экспорт
export default CityData;
