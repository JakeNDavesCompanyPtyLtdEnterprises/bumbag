import React from 'react';
import { Box, Icon, Hidden, Menu as _Menu, Sidebar as PopoutSidebar, palette, space, styled, theme } from 'fannypack';
import Link from 'next/link';

import { useDocsContext } from './DocsContext';

const Spacer = styled(Box)`
  width: 250px;

  @media screen and (max-width: ${theme('fannypack.layout.desktopBreakpoint')}px) {
    width: 0px;
  }
`;
const Wrapper = styled(Box)`
  background-color: ${palette('white700')};
  height: 100vh;
  min-width: 250px;
  width: 250px;
  overflow-y: scroll;
  transform: translateX(0px);

  @media screen and (max-width: ${theme('fannypack.layout.desktopBreakpoint')}px) {
    transform: translateX(${props => (props.isMenuOpen ? '0px' : '-250px')});
  }
`;
const Menu = styled(_Menu)`
  && button {
    border-radius: 3px;
    margin-bottom: ${space(1)}rem;

    &:hover {
      background-color: unset;
      color: ${palette('primary')};
    }

    &:focus {
      background-color: unset;
    }
  }
`;

function Sidebar() {
  const { layout = {}, routes = [], route = {} } = useDocsContext();

  const MobileSidebar = React.useCallback(
    ({ children }) => (
      <PopoutSidebar isVisible={layout.isMenuOpen} onClickClose={layout.closeMenu}>
        {children}
      </PopoutSidebar>
    ),
    [layout]
  );
  const DesktopSidebar = React.useCallback(({ children }) => <Box fixed>{children}</Box>);
  const SidebarContainer = layout.isMobile ? MobileSidebar : DesktopSidebar;

  const menuItems = routes.reduce((currentMenuItems, route) => {
    let newMenuItems = currentMenuItems;
    if (route.menu) {
      if (!newMenuItems[route.menu]) {
        newMenuItems[route.menu] = [route];
      } else {
        newMenuItems[route.menu].push(route);
      }
    } else {
      newMenuItems[route.name] = route;
    }
    return newMenuItems;
  }, {});

  return (
    <React.Fragment>
      <Spacer />
      <SidebarContainer>
        <Wrapper isMenuOpen={layout.isMenuOpen}>
          <Menu margin="major-2">
            {Object.entries(menuItems).map(([name, menuItem], i) => (
              <React.Fragment key={i}>
                {Array.isArray(menuItem) ? (
                  <Hidden.Container defaultVisible={route.menu === name}>
                    {hidden => (
                      <React.Fragment>
                        <Menu.Item
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          onClick={hidden.toggle}
                        >
                          {name}
                          <Icon icon={hidden.isVisible ? 'solid-chevron-up' : 'solid-chevron-down'} top="0" />
                        </Menu.Item>
                        {hidden.isVisible && (
                          <Box paddingLeft="major-2" width="100%">
                            {menuItem.map((item, i) => (
                              <Link key={i} href={item.path}>
                                <Menu.Item color={route.path === item.path ? 'primary' : undefined} fontWeight="400">
                                  {item.name}
                                </Menu.Item>
                              </Link>
                            ))}
                          </Box>
                        )}
                      </React.Fragment>
                    )}
                  </Hidden.Container>
                ) : (
                  <Link href={menuItem.path}>
                    <Menu.Item color={route.path === menuItem.path ? 'primary' : undefined}>{name}</Menu.Item>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </Menu>
        </Wrapper>
      </SidebarContainer>
    </React.Fragment>
  );
}

export default Sidebar;
