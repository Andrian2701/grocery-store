import { useDispatch, useSelector } from "react-redux";
import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { packagingItems } from "./items";
import { setPackagingType } from "../../../../../../store/features/Filters/FiltersSlice";
import { FiltersState } from "../../../../../../types";

export const PackagingFilter = () => {
  const checked = useSelector(
    (state: { filters: FiltersState }) => state.filters.packagingType
  );
  const dispatch = useDispatch();

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    currentIndex === -1
      ? newChecked.push(value)
      : newChecked.splice(currentIndex, 1);

    dispatch(setPackagingType(newChecked));
  };

  return (
    <>
      {packagingItems.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  inputProps={{ "aria-labelledby": labelId }}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </>
  );
};
