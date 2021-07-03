import { animations, border, box, clip, elementProperties, misc, scss, style, typography, visuals } from './groups';

type Rule = {
  groupName: string;
  emptyLineBefore: 'always';
  noEmptyLineBetween: true;
  properties: string[];
};

const createGroup = (groupName: string, properties: string[]): Rule => ({
  emptyLineBefore: 'always',
  noEmptyLineBetween: true,
  groupName,
  properties,
});

type Rules = string[];
type MultiRules = Rules[];

const ruleIsArray = (rules: Rules | MultiRules): rules is MultiRules => Array.isArray(rules[0]);

const mergeGroups = (groups: Record<string, string[] | string[][]>) => {
  const groupRules: Rule[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const [groupName, rules] of Object.entries(groups)) {
    if (ruleIsArray(rules)) {
      groupRules.push(...rules.map((props) => createGroup(groupName, props)));
    } else {
      groupRules.push(createGroup(groupName, rules));
    }
  }

  return groupRules;
};

export const propertyOrdering = [
  mergeGroups({
    scss,
    elementProperties,

    box,

    typography,
    border,
    visuals,
    style,

    clip,
    misc,

    animations,
  }),
  // {"unspecified": "bottomAlphabetical"}
];
