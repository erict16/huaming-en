import desksDoc from "../../content/desks.json";

export type Desk = (typeof desksDoc)[number];

export const desks: Desk[] = desksDoc;

export const defaultDeskId = "hq";

export function deskById(id: string): Desk {
  return desks.find((d) => d.id === id) ?? desks[0];
}
