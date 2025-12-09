import { BiCommentDetail } from "react-icons/bi";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi2";

import { RiBox3Line } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { FaRegComments } from "react-icons/fa";
import { LuTicketCheck } from "react-icons/lu";
import { LuHeartHandshake } from "react-icons/lu";

export default [
  {
    id: crypto.randomUUID(),
    title: "منو اصلی",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/",
        title: "داشبورد",
        icon: TbSmartHome,
      },
      {
        id: crypto.randomUUID(),
        href: "/products",
        title: "محصولات",
        icon: RiBox3Line,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "کاربران",
        icon: TbUsers,
      },
      {
        id: crypto.randomUUID(),
        href: "/tickets",
        title: "تیکت ها",
        icon: LuTicketCheck,
      },
      {
        id: crypto.randomUUID(),
        href: "/sefaresh",
        title: "علاقه مندی ها",
        icon: LuHeartHandshake,
      },
      {
        id: crypto.randomUUID(),
        href: "/comments",
        title: "کامنت ها",
        icon: FaRegComments,
      },
    ],
  },
];
