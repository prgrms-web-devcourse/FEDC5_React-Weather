import './index.scss';
import { ListProps } from '../../../Types/Modal';
const DUMMY_LOCATION = [
  '대한민국 서울특별시 강남구',
  '대한민국 전라북도 고창군 무장면 강남리'
];

export default function SearchList({ keyword, list }: ListProps) {
  function parseKeywordWithSpan(text: string, keyword: string) {
    const regex = new RegExp(keyword, 'g');
    const parts = text.split(regex);
    const nodes = [];
    nodes.push(parts[0]);
    nodes.push(<span>{keyword}</span>);
    nodes.push(parts[1]);
    return nodes;
  }

  return (
    <ul>
      {DUMMY_LOCATION.map((location) => (
        <li className="list__item">{parseKeywordWithSpan(location, '강남')}</li>
      ))}
    </ul>
  );
}
