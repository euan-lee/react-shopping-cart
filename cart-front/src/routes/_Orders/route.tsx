import { Outlet, createFileRoute } from "@tanstack/react-router";
import Flex from "../../ComponentsPrototype/Layout/Flex";
export const Route = createFileRoute("/_Orders")({
  component: () => (
    <Flex className="gap-5 p-12 px-60">
      <Outlet />
    </Flex>
  ),
});
