export interface Unit {
  id: string; // FIXME: This isn't really used. Units are ID'd by their assigned slot.
  type: string;
  configId: string;
  modifiers: string[];
  slotId: string; // TODO: This probably shouldn't just be a UUID
  formationId: string;
  isDraft?: boolean;
}
