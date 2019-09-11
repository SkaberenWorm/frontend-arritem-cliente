import { NavItemType } from "./nav-item-type";
import { DropdownLink } from "./dropdown-link";

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink | 'separator')[];
}