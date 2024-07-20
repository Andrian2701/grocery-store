import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../../../../theme";
import { setCalories } from "../../../../../../store/features/Filters/FiltersSlice";
import { FiltersState } from "../../../../../../types";

type CalorieFilterProps = {
  title: string;
  filterParam: number;
  style?: React.CSSProperties;
};

export const CalorieFilter = ({
  title,
  style,
  filterParam,
}: CalorieFilterProps) => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: { filters: FiltersState }) => state.filters
  );

  return (
    <Button
      onClick={() => dispatch(setCalories(filterParam))}
      sx={{
        width: "auto",
        fontSize: "0.8rem",
        color: theme.palette.secondary.main,
        bgcolor: "transparent",
        border:
          filters.calories === filterParam
            ? `1px solid ${theme.palette.secondary.light}`
            : `1px solid rgba(0, 0, 0, 0.12)`,
        "&:hover": {
          border: `1px solid ${theme.palette.secondary.light}`,
          bgcolor: "transparent",
        },
        ...style,
      }}
    >
      {title}
    </Button>
  );
};
