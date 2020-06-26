// action to set navbar open
export const IS_NAVBAR_OPEN = 'IS_NAVBAR_OPEN ';
// method to set navBar open
export const isNavbarOpen = (openValue) => ({
  type: IS_NAVBAR_OPEN,
  openValue,
});
