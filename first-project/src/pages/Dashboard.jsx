import React from "react";

export const Dashboard = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography type="heading" text="WELCOME," />
        <span
          style={{ color: "var(--primary)", fontSize: "var(--font-header)" }}
        >
          Mr. John
        </span>
      </div>
      <Button>Sign out</Button>
    </main>
  );
};
