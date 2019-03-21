import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faIgloo,
  faSearch,
  faClipboard,
  faChevronDown,
  faChevronUp,
  faThumbsUp,
  faPen,
  faLongArrowAltRight,
  faFile,
  faComments,
  faUser,
  faHandPaper,
  faFileSignature,
  faShare,
  faExternalLinkAlt,
  faTrashAlt
} from '@fortawesome/free-solid-svg-icons';
import { css, palette } from '../../src/styled';

export default {
  global: {
    base: css`
      .token {
        &.tag {
          color: ${palette('primary')};
        }

        &.attr-name {
          color: ${palette('secondary')};
        }

        &.attr-value {
          color: ${palette('text')};
        }
      }
    `
  },
  Code: {
    base: css`
      & span {
        white-space: pre-wrap;
        overflow-wrap: break-word;
      }
    `
  },
  Icon: {
    icons: {
      calendar: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: [
          'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z'
        ]
      }
    },
    iconSets: [
      {
        icons: [
          faArrowLeft,
          faArrowRight,
          faBars,
          faIgloo,
          faSearch,
          faClipboard,
          faChevronDown,
          faChevronUp,
          faThumbsUp,
          faPen,
          faLongArrowAltRight,
          faFile,
          faComments,
          faUser,
          faHandPaper,
          faShare,
          faFileSignature,
          faExternalLinkAlt,
          faTrashAlt
        ],
        prefix: 'solid-',
        type: 'font-awesome'
      }
    ]
  }
};
