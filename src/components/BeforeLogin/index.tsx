import React from "react";
import Button from "payload/dist/admin/components/elements/Button";

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <Button el="anchor" url="/oauth2/authorize">
        Login with Google
      </Button>
    </div>
  );
};

export default BeforeLogin;
