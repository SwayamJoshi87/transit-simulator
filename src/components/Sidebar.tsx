const Sidebar = () => {
  return (
    <div
      style={{
        width: 260,
        height: "100%",
        boxSizing: "border-box",
        borderRight: "1px solid #e5e5e5",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>
        Transit Simulator
      </h1>
      <p style={{ margin: 0, fontSize: 12, color: "#666" }}>
        GTA map · route editor coming next
      </p>
    </div>
  );
};

export default Sidebar;
