import { ListItem } from "./ListItem";
import './Apis.scss';


export const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
