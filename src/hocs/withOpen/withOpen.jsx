import React from "react";

export const withOpen = (Component) => (props) => {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpenChange = () => setOpen(!isOpen);

  return (
    <Component
      {...props}
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    />
  );
};

export default withOpen;
