import { useCallback, useRef } from 'react';
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  GridProps,
  StandardTextFieldProps,
  styled,
} from '@mui/material';
import { Search } from '@mui/icons-material';

interface SearchBarProps extends StandardTextFieldProps {
  onSearch?: Function;
  ContainerProps?: GridProps;
}

const SearchBarTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
const SearchBar = ({ onSearch, ContainerProps, ...props }: SearchBarProps) => {
  const searchInputRef = useRef<HTMLInputElement>();

  const handleTermSearch = useCallback(() => {
    const value = searchInputRef?.current?.value;
    onSearch && onSearch(value);
  }, [onSearch]);

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleTermSearch();
      }
    },
    [handleTermSearch]
  );

  return (
    <Grid {...ContainerProps}>
      <SearchBarTextField
        id="search-bar"
        variant="outlined"
        inputRef={searchInputRef}
        {...props}
        onKeyDown={onKeyDownHandler}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTermSearch} edge="end">
                <Search />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  );
};

export default SearchBar;
