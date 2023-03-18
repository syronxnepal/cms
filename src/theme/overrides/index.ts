import { Theme } from '@mui/material';
import { merge } from 'lodash';

import AppBar from './AppBar';
import Button from './Button';
import Card from './Card';
import Checkbox from './Checkbox';
import Chip from './Chip';
import Dialog from './Dialog';
import FormControlLabel from './FormControlLabel';
import IconButton from './IconButton';
import Input from './Input';
import Link from './Link';
import List from './List';
import Pagination from './Pagination';
import Paper from './Paper';
import Radio from './Radio';
import Stack from './Stack';
import Tab from './Tab';
import Table from './Table';
import ToggleButtonGroup from './ToggleButtonGroup';
import Typography from './Typography';

const ComponentsOverrides = (theme: Theme) => merge(Button(theme));
// AppBar(theme),
// Button(theme),
// Card(theme),
// Checkbox(),
// Chip(theme),
// Dialog(theme),
// FormControlLabel(),
// IconButton(theme),
// Input(theme),
// Link(theme),
// List(theme),
// Paper(theme),
// Pagination(theme),
// Radio(),
// Stack(),
// Tab(theme),
// Table(theme),
// ToggleButtonGroup(theme),
// Typography(theme)

export default ComponentsOverrides;
