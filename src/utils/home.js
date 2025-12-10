import { TiShoppingCart } from "react-icons/ti";
import { LuUsersRound } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

export const generateSummaries = ({
  productsLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => [
  { id: 1, title: "تعداد محصولات", value: productsLength, Icon: TiShoppingCart },
  { id: 2, title: "تعداد کاربران", value: usersLength, Icon: LuUsersRound },
  { id: 3, title: "تعداد تیکت ها", value: ticketsLength, Icon: FaRegCommentDots },
  { id: 4, title: "تعداد مدیران", value: adminsLength, Icon: RiAdminLine },
];

export const generateChartData = ({
  productsLength,
  usersLength,
  ticketsLength,
  adminsLength,
}) => [
  { name: "تعداد محصولات", value: productsLength },
  { name: "تعداد کاربران", value: usersLength },
  { name: "تعداد تیکت ها", value: ticketsLength },
  { name: "تعداد مدیران", value: adminsLength },
];
