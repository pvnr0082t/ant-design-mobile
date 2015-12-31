import React from 'react';

require('./style/index.less');

const antm = {
  List            : require('./components/list'),
  InputItem       : require('./components/input-item'),
  CheckboxItem    : require('./components/checkbox-item'),
  TextareaItem    : require('./components/textarea-item'),
  SelectItem      : require('./components/select-item'),
  SwitchItem      : require('./components/switch-item'),
  Button          : require('./components/button'),
  ListPicker      : require('./components/list-picker'),
  ListDatePicker  : require('./components/list-date-picker'),
  ListSelector    : require('./components/list-selector'),
  Search          : require('./components/search'),
  Tab             : require('./components/tab'),
  Modal           : require('./components/modal'),
  PageResult      : require('./components/page-result')
};

antm.version = require('./package.json').version;

if (process.env.NODE_ENV !== 'production') {
  const warning = require('warning');
  const semver = require('semver');
  const reactVersionInDeps = require('./package.json').devDependencies.react;
  warning(semver.satisfies(React.version, reactVersionInDeps) || semver.gtr(React.version, reactVersionInDeps),
    `antm@${antm.version} need react@${reactVersionInDeps} or higher, which is react@${React.version} now.`);
}

module.exports = antm;