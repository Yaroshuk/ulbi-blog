type Mods = Record<string, boolean | string>;

//TODO: повторить entries
export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(" ");
}

classNames("remove-btn", { hovered: true, red: false }, ["paddings", "test"]);
