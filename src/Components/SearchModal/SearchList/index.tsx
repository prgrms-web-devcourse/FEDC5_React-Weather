import './index.scss';
import { ListProps } from '../../../Types/Modal';

const DUMMY_LOCATION = [
  '대한민국 서울특별시 강남구',
  '대한민국 전라북도 고창군 무장면 강남리'
];

export default function SearchList({ target, list }: ListProps) {
  function parseLocationTarget(target: string, keyword: string) {
    const [firstPart, secondPart] = target.split(keyword);
    return [firstPart, <strong>{keyword}</strong>, secondPart];
  }

  return (
    <ul>
      {DUMMY_LOCATION.map((location) => (
        <li className="list__item">{parseLocationTarget(location, '강남')}</li>
      ))}
    </ul>
  );
}
