import * as React from "react";

import { NavMain } from "./nav/main";
import { NavGeneral } from "./nav/general";
import { NavUser } from "./nav/user";
import { BrandComp } from "./nav/brand";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <BrandComp />
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavGeneral />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
