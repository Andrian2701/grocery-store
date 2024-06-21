export const useToggleDrawer = (setState: any, anchor: string) => {
  const handleToggle =
    (open: boolean) => (e: React.KeyboardEvent | React.MouseEvent) => {
      if (
        e.type === "keydown" &&
        ["Tab", "Shift"].includes((e as React.KeyboardEvent).key)
      )
        return;
      setState((prev: any) => ({ ...prev, [anchor]: open }));
    };

  return handleToggle;
};
