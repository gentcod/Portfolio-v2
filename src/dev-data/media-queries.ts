const breakpoints = {
   phone: "37.5em",
   tabPort: "56.5em",
   tabLand: "75em",
   bigDesktop: "112.5em",
};
 
export const devices = {
   phone: `(max-width: ${breakpoints.phone})`,
   tabPort: `(max-width: ${breakpoints.tabPort})`,
   tabLand: `(max-width: ${breakpoints.tabLand})`,
   bigDesktop: `(min-width: ${breakpoints.bigDesktop})`,
};