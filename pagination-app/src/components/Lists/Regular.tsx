import { UserDataType, UsersListType } from "../../types/types";
import "./Regular.css";

export default function Regular(props: UsersListType) {
  const { data, listItem: ListItem, perPageCount = 12 } = props;
  return (
    <ul className="flex">
      {data.length > 0
        ? data.map((user: UserDataType) => (
            <ListItem key={user.id} {...user}></ListItem>
          ))
        : Array(perPageCount) //for loading state
            .fill(1)
            .map((_, idx: number) => <ListItem key={idx}></ListItem>)}
    </ul>
  );
}
