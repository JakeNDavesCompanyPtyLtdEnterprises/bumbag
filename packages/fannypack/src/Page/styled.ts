// @ts-ignore
import _get from 'lodash/get';
import styled, { css, palette, space, theme } from '../styled';
import { Box, Flex } from '../primitives';
import { Container } from '../Container';
import { Sidebar as _Sidebar } from '../Sidebar';
import { PageContentProps } from './PageContent';
import { PageWithSidebarProps } from './PageWithSidebar';

export const PageContent = styled(Container)<PageContentProps>`
  padding: ${space(4, 'major')}rem ${space(2, 'major')}rem;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding-top: ${space(2, 'major')}rem;
    padding-bottom: ${space(2, 'major')}rem;

    & {
      ${theme('fannypack.Page.Content.mobile')};
    }
  }

  ${props =>
    props.isFluid &&
    css`
      padding-top: ${space(2, 'major')}rem;
      padding-bottom: ${space(2, 'major')}rem;

      & {
        ${theme('fannypack.Page.Content.fluid')};
      }
    `}

  & {
    ${theme('fannypack.Page.Content.base')};
  }
`;

export const Spacer = styled(Box)`
  width: ${theme('fannypack.Page.WithSidebar.sidebarWidth')};
  min-width: ${theme('fannypack.Page.WithSidebar.sidebarWidth')};

  @media screen and (max-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.WithSidebar.breakpoint')}Breakpoint`)}px) {
    width: 0px;
    min-width: 0px;

    & {
      ${theme('fannypack.Page.WithSidebar.Spacer.mobile')};
    }
  }

  & {
    ${theme('fannypack.Page.WithSidebar.Spacer.base')};
  }
`;

export const Sidebar = styled(Box)`
  background-color: ${palette('white700')};
  height: 100vh;
  min-width: ${theme('fannypack.Page.WithSidebar.sidebarWidth')};
  width: ${theme('fannypack.Page.WithSidebar.sidebarWidth')};
  overflow-y: scroll;
  transform: translateX(0px);

  & {
    ${theme('fannypack.Page.WithSidebar.Sidebar.base')};
  }
`;

export const DesktopSidebarWrapper = styled(Box)`
  position: fixed;

  @media screen and (max-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.WithSidebar.breakpoint')}Breakpoint`)}px) {
    display: none;
  }

  & {
    ${theme('fannypack.Page.WithSidebar.DesktopSidebarWrapper.base')};
  }
`;

export const MobileSidebarWrapper = styled(_Sidebar)`
  @media screen and (min-width: ${props =>
      theme(`fannypack.layout.${_get(props, 'theme.fannypack.Page.WithSidebar.breakpoint')}Breakpoint`)(props) + 1}px) {
    display: none;
  }

  & {
    ${theme('fannypack.Page.WithSidebar.MobileSidebarWrapper.base')};
  }
`;

export const PageWithSidebar = styled(Flex)<PageWithSidebarProps>`
  & {
    ${theme('fannypack.Page.WithSidebar.base')};
  }
`;
