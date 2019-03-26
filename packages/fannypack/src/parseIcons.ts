import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type FontAwesomeIconStandalone = {
  iconName?: string;
  width?: number;
  height?: number;
  svgPathData?: string;
};
export type ParsedIcon = {
  viewBoxHeight: number;
  viewBoxWidth: number;
  paths: Array<string>;
};
export type ParsedIcons = { [key: string]: ParsedIcon };
export type Opts = {
  prefix?: string;
  type?: 'font-awesome' | 'font-awesome-standalone';
};
export type Icons = IconDefinition[] | FontAwesomeIconStandalone[];

export default function parseIcons(icons: Icons, { prefix, type }: Opts = {}): ParsedIcons {
  if (type === 'font-awesome') {
    const parsedIcons = (icons as IconDefinition[]).reduce((newIcons, { iconName, icon: iconDetails }) => {
      if (!iconDetails) return newIcons;
      return {
        ...newIcons,
        [`${prefix || ''}${iconName}`]: {
          viewBoxWidth: iconDetails[0],
          viewBoxHeight: iconDetails[1],
          paths: [iconDetails[4]]
        }
      };
    }, {});
    return parsedIcons as ParsedIcons;
  }
  if (type === 'font-awesome-standalone') {
    const parsedIcons = (icons as FontAwesomeIconStandalone[]).reduce(
      (newIcons, { iconName, height, width, svgPathData }) => {
        if (!iconName) return newIcons;
        return {
          ...newIcons,
          [`${prefix || ''}${iconName}`]: {
            viewBoxWidth: width,
            viewBoxHeight: height,
            paths: [svgPathData]
          }
        };
      },
      {}
    );
    return parsedIcons as ParsedIcons;
  }
  return {};
}
